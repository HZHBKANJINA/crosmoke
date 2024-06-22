const mongoose=require('mongoose');

const vipIspuhivanjeDimaSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('vip_ispuhivanje_dim',vipIspuhivanjeDimaSchema,'vip_ispuhivanje_dima');