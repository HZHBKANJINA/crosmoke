const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipLizanje=require('../models/vip_lizanje');

router.get('/',async(req,res)=>{
    try{
        const vipLizanja=await VipLizanje.find();
        res.json(vipLizanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vipLizanje=await VipLizanje.findById(req.params.id);
        if(vipLizanje){
            res.json(vipLizanje);
        }else{
            return res.status(404).json({message:'Lizanje nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;