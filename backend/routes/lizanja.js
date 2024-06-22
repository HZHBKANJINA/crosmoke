const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Lizanje=require('../models/lizanje');

router.get('/',async(req,res)=>{
    try{
        const lizanja=await Lizanje.find();
        res.json(lizanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const lizanje=await Lizanje.findById(req.params.id);
        if(lizanje){
            res.json(lizanje);
        }else{
            return res.status(404).json({message:'Lizanje nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;