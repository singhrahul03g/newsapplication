//news schema and model
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const news = new Schema({
    cname:{type:String,required:true},
    title:{type:String,unique:true},
    body:String,
    image:String,
    created_at:{ type: Date, default: Date.now }
});
module.exports = mongoose.model('news',news);