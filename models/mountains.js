const mongoose=require('mongoose');

const mountainsSchema=new mongoose.Schema({name: String,location: String,altitude: Number});

const mountains = mongoose.model('mountains', mountainsSchema);

module.exports = mountains;
