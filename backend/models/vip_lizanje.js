const mongoose=require('mongoose');

const vipLizanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('vip_lizanje',vipLizanjeSchema,'vip_lizanja');