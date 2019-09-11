//category schema and model
const  mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cat = new Schema({
    cname:{type:String,unique:true},
    description:String,
    image:String,
    created_at:{ type: Date, default: Date.now }
});
module.exports = mongoose.model('category',cat);