const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipSezona=require('../models/vip_sezona');

router.get('/',async(req,res)=>{
    try{
        const vip_sezone=await VipSezona.find();
        res.json(vip_sezone);
    }catch(error){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vip_sezona=await VipSezona.find(req.params.id);
        if(vip_sezona){
            res.json(vip_sezona);
        }else{
            return res.status(404).json({message:'Vip sezona nije pronađena'});
        }
    }catch(error){
        res.status(500).json({message:err.message});
    }
});