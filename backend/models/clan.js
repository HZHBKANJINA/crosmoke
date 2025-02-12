const mongoose=require('mongoose');

const clanSchema=new mongoose.Schema({
    broj_clana:Number,
    pitanje_za_lizanje:String,
    aktivnost_clana:String,
    glavni_nacin_obrade_cigare:String,
    ukupan_broj_sezona:Number,
    ukupan_broj_cigara:Number,
    ukupan_broj_EU_cigara:Number,
    ukupan_broj_meksanih_cigara:Number,
    glavni_nacin_meksanja:String,
    meksanje_pritiskanjem:Number,
    meksanje_rolanjem:Number,
    meksanje_povlacenjem:Number,
    meksanje_udaranje_filtera:Number,
    meksanje_kombinacija_svih_nacina:Number,
    ukupan_broj_grickanih_cigara:Number,
    glavni_nacin_grickanja:String,
    grickanje_vrha:Number,
    grickanje_psk_ili_kombinacija:Number,
    grickanje_cijele_strane:Number,
    grickanje_sa_svih_strana:Number,
    ukupan_broj_lizanih_cigara:Number,
    glavni_nacin_lizanja:String,
    lizanje_tockasti_vrh:Number,
    lizanje_uspravni_vrh:Number,
    lizanje_kosi_vrh:Number,
    lizanje_vodoravni_vrh:Number,
    lizanje_pola_strane:Number,
    lizanje_cijele_strane:Number,
    lizanje_cijele_strane_5_bodova:Number,
    lizanje_cijele_strane_i_pola_strane:Number,
    lizanje_2_cijele_strane:Number,
    lizanje_2_cijele_strane_i_pola_strane:Number,
    lizanje_3_cijele_strane:Number,
    lizanje_sa_svih_strana:Number,
    ukupan_broj_pravilnog_stavljanja:String,
    ukupan_broj_trikova:String,
    anketa:String,
    spremi_anketu:{type:mongoose.Schema.Types.ObjectId,ref:'anketa'}
});

module.exports=mongoose.model('clan',clanSchema,'clanovi');