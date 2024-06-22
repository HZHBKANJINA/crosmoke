const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipIspuhivanjeDim=require('../models/vip_ispuhivanje_dim');

router.get('/',async(req,res)=>{
    try{
        const vipIspuhivanjeDim=await VipIspuhivanjeDim.find();
        res.json(vipIspuhivanjeDim);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vipIspuhivanjeDima=await VipIspuhivanjeDim.findById(req.params.id);
        if(vipIspuhivanjeDima){
            res.json(vipIspuhivanjeDima);
        }else{
            return res.status(404).json({message:'Ispuhivanje dima nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;