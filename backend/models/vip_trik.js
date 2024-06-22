const mongoose=require('mongoose');

const vipTrikoviSchema=new mongoose.model({
    naziv:String
});

module.exports=mongoose.model('vip_trik',vipTrikoviSchema,'vip_trikovi');