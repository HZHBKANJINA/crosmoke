const mongoose=require('mongoose');

const sezonaSchema=new mongoose.Schema({
    broj:Number,
    naziv:String,
    clan:{type:mongoose.Schema.Types.ObjectId,ref:'clan'}
});

module.exports=mongoose.model('sezona',sezonaSchema,'sezone');