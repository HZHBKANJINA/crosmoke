const mongoose=require('mongoose');

const ostaliNacinSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('ostali_nacin',ostaliNacinSchema,'ostali_nacini');