const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Clan=require('../models/clan');

router.get('/',async(req,res)=>{
    try{
        const clanovi=await Clan.find();
        res.json(clanovi);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const clan=await Clan.findById(req.params.id);
        if(clan){
            res.json(clan);
        }else{
            return res.status(404).json({message:'Član ne postoji'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/',async(req,res)=>{
    const clan=new Clan(req.body);
    try{
        const noviClan=await clan.save();
        res.status(201).json(noviClan);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const clan=await Clan.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(clan){
            res.json(clan);
        }else{
            return res.status(404).json({message:'Član ne postoji'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const clan=await Clan.findByIdAndDelete(req.params.id);
        if(clan){
            res.json({message:'Član je obrisan'});
        }else{
            return res.status(404).json({message:'Član ne postoji'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;