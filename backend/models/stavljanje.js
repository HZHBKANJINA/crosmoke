const mongoose=require('mongoose');

const stavljanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('stavljanje',stavljanjeSchema,'stavljanja');