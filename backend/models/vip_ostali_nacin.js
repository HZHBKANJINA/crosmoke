const mongoose=require('mongoose');

const vipOstaliNacinSchema=new mongoose.model({
    naziv:String
});

module.exports=mongoose.model('vip_ostali_nacin',vipOstaliNacinSchema,'vip_ostali_nacini');