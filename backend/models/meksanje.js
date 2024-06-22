const mongoose=require('mongoose');

const meksanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('meksanje',meksanjeSchema,'meksanja');