//adminlogin schema and model
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const admin = new Schema({
    email:{type:String,unique:true},
    password:String,
    created_at:{ type: Date, default: Date.now }
});
module.exports = mongoose.model('admin',admin);