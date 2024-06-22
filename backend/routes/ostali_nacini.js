const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const OstaliNacin=require('../models/ostali_nacin');

router.get('/',async(req,res)=>{
    try{
        const ostaliNacini=await OstaliNacin.find();
        res.json(ostaliNacini);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const ostaliNacin=await OstaliNacin.findById(req.params.id);
        if(ostaliNacin){
            res.json(ostaliNacin);
        }else{
            return res.status(404).json({message:'Jedan od ostalih načina nije pronađen'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;