const mongoose=require('mongoose');

const cigaraSchema=new mongoose.Schema({
    clan:{type:mongoose.Schema.Types.ObjectId,ref:'clan'},
    sezona:{type:mongoose.Schema.Types.ObjectId,ref:'sezona'},
    broj_cigare:Number,
    meksanje:String,
    tip_meksanja:{type:mongoose.Schema.Types.ObjectId,ref:'meksanje'},
    bodovi_meksanja:Number,
    grickanje:String,
    tip_grickanja:{type:mongoose.Schema.Types.ObjectId,ref:'grickanje'},
    bodovi_grickanja:Number,
    lizanje:String,
    tip_lizanja:{type:mongoose.Schema.Types.ObjectId,ref:'lizanje'},
    bodovi_lizanja:Number,
    pravilno_stavljanje:String,
    tip_stavljanja:{type:mongoose.Schema.Types.ObjectId,ref:'stavljanje'},
    bodovi_pravilnog_stavljanja:Number,
    trik:String,
    tip_trikova:{type:mongoose.Schema.Types.ObjectId,ref:'trik'},
    bodovi_trikova:Number,
    ostali_nacin_obrade:String,
    tip_ostalog_nacina_obrade:{type:mongoose.Schema.Types.ObjectId,ref:'ostali_nacin'},
    bodovi_ostalog_nacina_obrade:Number,
    pravilne_cigare:String,
    boja:String
});

module.exports=mongoose.model('cigara',cigaraSchema,'cigare');