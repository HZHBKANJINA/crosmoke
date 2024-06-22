const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Stavljanje=require('../models/stavljanje');

router.get('/',async(req,res)=>{
    try{
        const stavljanja=await Stavljanje.find();
        res.json(stavljanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const stavljanje=await Stavljanje.findById(req.params.id);
        if(stavljanje){
            res.json(stavljanje);
        }else{
            return res.status(404).json({message:'Stavlanje nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;