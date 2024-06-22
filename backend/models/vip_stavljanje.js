const mongoose=require('mongoose');

const vipStavljanjeSchema=new mongoose.model({
    naziv:String
});

module.exports=mongoose.model('vip_stavljanje',vipStavljanjeSchema,'vip_stavljanja');