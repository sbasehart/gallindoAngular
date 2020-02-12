var mongoose = require('mongoose'), Schema = mongoose.Schema;

var ContactSchema = new mongoose.Schema ({
    id: String,
    conName: String,
    conPhone: String,
    conEmail: String,
    conAddress1: String,
    conAddress2: String,
    conMessage: String,
    updated: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Contact', ContactSchema);