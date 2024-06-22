const mongoose=require('mongoose');

const anketaSchema=new mongoose.Schema({
    broj:Number,
    kolicina_dan:Number,
    kolicina_max_dan:Number,
    trenutne_cigare:String,
    najdraze_cigare:String,
    meksanje:String,
    kolicina_meksanja:String,
    lizanje:String,
    kolicina_lizanja:String,
    grickanje:String,
    kolicina_grickanja:String,
    nova_cigara:String,
    kolicina_gutanja_dima:Number,
    kolutici_od_dima:String,
    ocjena_pusenja:Number,
    opis_pusenja:String,
    ocjena_meksanja:Number,
    opis_meksanja:String,
    ocjena_lizanja:Number,
    opis_lizanja:String
});

module.exports=mongoose.model('anketa',anketaSchema,'ankete');