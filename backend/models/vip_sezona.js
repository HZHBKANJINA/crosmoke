const mongoose=require('mongoose');

const vipSezona=new mongoose.Schema({
    naziv:String,
    clan:{type:mongoose.Schema.Types.ObjectId,ref:'clan'}
});

module.exports=mongoose.model('vip_sezona',vipSezona,'vip_sezone');