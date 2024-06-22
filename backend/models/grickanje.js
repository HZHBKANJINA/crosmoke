const mongoose=require('mongoose');

const grickanjeSchema=new mongoose.Schema({
    naziv:String
});

module.exports=mongoose.model('grickanje',grickanjeSchema,'grickanja');