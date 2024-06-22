const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipCigara=require('../models/vip_cigara');

router.get('/',async(req,res)=>{
    try{
        const vipCigare=await VipCigara.find();
        res.json(vipCigare);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vipCigara=await VipCigara.findById(req.params.id);
        if(vipCigara){
            res.json(vipCigara);
        }else{
            return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/',async(req,res)=>{
    const vipCigara=new VipCigara(req.body);
    try{
        const novaVipCigara=await vipCigara.save();
        res.status(201).json(novaVipCigara);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const vipCigara=await VipCigara.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(vipCigara){
            res.json(vipCigara);
        }else{
            return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const vipCigara=await VipCigara.findByIdAndDelete(req.params.id);
        if(vipCigara){
            res.json({message:'Cigara je obrisana'});
        }else{
            return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;