const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const Cigara=require('../models/cigara');

router.get('/',async(req,res)=>{
    try{
        const cigare=await Cigara.find().populate('clan').populate('sezona').populate('tip_meksanja').populate('tip_grickanja').populate('tip_lizanja').populate('tip_stavljanja').populate('tip_trikova').populate('tip_ostalog_nacina_obrade');
        res.json(cigare);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const cigara=await Cigara.findById(req.params.id).populate('clan').populate('sezona').populate('tip_meksanja').populate('tip_grickanja').populate('tip_lizanja').populate('tip_stavljanja').populate('tip_trikova').populate('tip_ostalog_nacina_obrade');
        if(cigara){
            res.json(cigara);
        }else{
            return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.post('/',async(req,res)=>{
    const cigara=new Cigara(req.body);
    try{
        const novaCigara=await cigara.save();
        res.status(201).json(novaCigara);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const cigara=await Cigara.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(cigara){
            res.json(cigara);
        }else{
           return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const cigara=await Cigara.findByIdAndDelete(req.params.id);
        if(cigara){
            res.json({message:'Cigara je obrisana'});
        }else{
           return res.status(404).json({message:'Cigara nije pronađena'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;