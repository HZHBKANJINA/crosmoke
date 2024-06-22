const mongoose=require('mongoose');

const vipMeksanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('vip_meksanje',vipMeksanjeSchema,'vip_meksanja');