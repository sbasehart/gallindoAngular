var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./routes/auth');
var category = require('./routes/category');
var contact = require('./routes/contact');

var post = require('./routes/post');
var cors = require('cors')

mongoose.connect('mongodb://localhost/gallindoAngular', { 
    promiseLibrary: require('bluebird'), 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://summerbasehart:JSMacias!1993@cluster0-2g4yp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(cors())
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);
app.use('/api/category', category);
app.use('/api/post', post);
app.use('/api/contact', contact);

app.use('/api/public', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
