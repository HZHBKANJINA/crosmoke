const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Trik=require('../models/trik');

router.get('/',async(req,res)=>{
    try{
        const trikovi=await Trik.find();
        res.json(trikovi);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const trik=await Trik.findById(req.params.id);
        if(trik){
            res.json(trik);
        }else{
            return res.status(404).json({message:'Trik nije pronađen'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;