var passport = require('passport');
var config = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Contact = require("../models/contact");
const Post = require('../models/post');

router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Contact.find(function (err, contacts) {
      if (err) return next(err);
      res.json(contacts);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

router.get('/:id', passport.authenticate('jwt', { session: false }), function (req, res, next) {
  var token = getToken(req.headers);
  if (token) {
    Contact.findById(req.params.id, function (err, contact) {
      if (err) return next(err);
      console.log(contact.post);
      Post.findOne({_id: contact.post}).exec(function (err, post) {
        if (err) return next(err);
        console.log(post);
        res.json([contact, post]);
      });
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

router.post('/', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Contact.create(req.body, function (err, contact) {
    if (err) return next(err);
    res.json(contact);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Contact.findByIdAndUpdate(req.params.id, req.body, function (err, contact) {
    if (err) return next(err);
    res.json(contact);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res, next) {
var token = getToken(req.headers);
if (token) {
  Contact.findByIdAndRemove(req.params.id, req.body, function (err, contact) {
    if (err) return next(err);
    res.json(contact);
  });
} else {
  return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
});

getToken = function (headers) {
if (headers && headers.authorization) {
  var parted = headers.authorization.split(' ');
  if (parted.length === 2) {
    return parted[1];
  } else {
    return null;
  }
} else {
  return null;
}
};

module.exports = router;