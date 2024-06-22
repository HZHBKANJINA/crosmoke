const mongoose=require('mongoose');

const lizanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('lizanje',lizanjeSchema,'lizanja');