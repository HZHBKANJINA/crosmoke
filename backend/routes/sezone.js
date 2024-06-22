const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Sezona=require('../models/sezona');

router.get('/',async(req,res)=>{
    try{
        const sezone=await Sezona.find();
        res.json(sezone);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const sezona=await Sezona.findById(req.params.id);
        if(sezona){
            res.json(sezona);
        }else{
            return res.status(404).json({message:'Sezona nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/',async(req,res)=>{
    const sezona=new Sezona(req.body);
    try{
        const novaSezona=await sezona.save();
        res.status(201).json(novaSezona);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const sezona=await Sezona.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(sezona){
            res.json(sezona);
        }else{
            return res.status(404).json({message:'Sezona nije pronađena'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const sezona=await Sezona.findByIdAndDelete(req.params.id);
        if(sezona){
            res.json({message:'Sezona obrisana'});
        }else{
            res.status(404).json({message:'Sezona nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;