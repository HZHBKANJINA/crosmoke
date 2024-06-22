const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipClan=require('../models/vip_clan');

router.get('/',async(req,res)=>{
    try{
        const vipClanovi=await VipClan.find();
        res.json(vipClanovi);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vipClan=await VipClan.findById(req.params.id);
        if(vipClan){
            res.json(vipClan);
        }else{
            return res.status(404).json({message:'Član nije pronađen'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/',async(req,res)=>{
    const vipClan=new VipClan(req.body);
    try{
        const noviVipClan=await vipClan.save();
        res.status(201).json(noviVipClan);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const vipClan=await VipClan.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(vipClan){
            res.json(vipClan);
        }else{
            return res.status(404).json({message:'Član nije pronađen'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const vipClan=await VipClan.findByIdAndDelete(req.params.id);
        if(vipClan){
            res.json({message:'Član je obrisan'});
        }else{
            return res.status(404).json({message:'Član nije pronađen'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;