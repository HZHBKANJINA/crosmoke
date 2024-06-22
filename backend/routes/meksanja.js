const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Meksanje=require('../models/meksanje');

router.get('/',async(req,res)=>{
    try{
        const meksanja=await Meksanje.find();
        res.json(meksanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const meksanje=await Meksanje.findById(req.params.id);
        if(meksanje){
            res.json(meksanje);
        }else{
            return res.status(404).json({message:'Mekšanje nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;