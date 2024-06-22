const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Grickanje=require('../models/grickanje');

router.get('/',async(req,res)=>{
    try{
        const grickanja=await Grickanje.find();
        res.json(grickanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const grickanje=await Grickanje.findById(req.params.id);
        if(grickanje){
            res.json(grickanje)
        }else{
            return res.status(404).json({message:'Grickanje ne postoji'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;