const mongoose=require('mongoose');

const trikSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('trik',trikSchema,'trikovi')