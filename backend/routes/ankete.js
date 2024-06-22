const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Anketa=require('../models/anketa');

router.get('/',async(req,res)=>{
    try{
        const ankete=await Anketa.find();
        res.json(ankete);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const anketa=await Anketa.findById(req.params.id);
        if(anketa){
            res.json(anketa);
        }else{
           return res.status(404).json({message:'Anketa ne postoji'});
        }
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

router.post('/',async(req,res)=>{
    const anketa=new Anketa(req.body);
    try{
        const novaAnketa=await anketa.save();
        res.status(201).json(novaAnketa);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const anketa=await Anketa.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(igrac){
            res.json(anketa);
        }else{
            return res.status(404).json({ message: 'Anketa ne postoji' });
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const anketa=await Anketa.findByIdAndDelete(req.params.id);
        if(anketa){
            res.json({message:'Anketa je obrisana'});
        }else{
            return res.status(404).json({ message: 'Anketa ne postoji' });
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;