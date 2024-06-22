const mongoose=require('mongoose');

const vipGrickanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('vip_grickanje',vipGrickanjeSchema,'vip_grickanja');