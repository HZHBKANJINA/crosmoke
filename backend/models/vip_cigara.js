const mongoose=require('mongoose');

const vipCigaraSchema=new mongoose.Schema({
    broj:Number,
    clan:{type:mongoose.Schema.Types.ObjectId,ref:'clan'},
    meksanje:String,
    tip_meksanja:{type:mongoose.Schema.Types.ObjectId,ref:'vip_meksanje'},
    bodovi_meksanja:Number,
    grickanje:String,
    tip_grickanja:{type:mongoose.Schema.Types.ObjectId,ref:'vip_grickanje'},
    bodovi_grickanja:Number,
    lizanje:String,
    tip_lizanja:{type:mongoose.Schema.Types.ObjectId,ref:'vip_lizanje'},
    bodovi_lizanja:Number,
    pravilno_stavljanje:String,
    tip_stavljanja:{type:mongoose.Schema.Types.ObjectId,ref:'vip_stavljanje'},
    bodovi_pravilnog_stavljanja:Number,
    trikovi:String,
    tip_trikova:{type:mongoose.Schema.Types.ObjectId,ref:'vip_trik'},
    bodovi_trikova:Number,
    ostali_nacin_obrade:String,
    tip_ostalog_nacina_obrade:{type:mongoose.Schema.Types.ObjectId,ref:'vip_ostali_nacin'},
    bodovi_ostalog_nacina_obrade:Number,
    eu_cigare:String,
    pusenje_cigare_do_kraja:String,
    ispuhivanje_dima:{type:mongoose.Schema.Types.ObjectId,ref:'vip_dim'},
    lizanje_cigare_poslje_pusenja:String
});

module.exports=mongoose.model('vip_cigara',vipCigaraSchema,'vip_cigare');