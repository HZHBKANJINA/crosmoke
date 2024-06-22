const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const VipGrickanje=require('../models/vip_grickanje');

router.get('/',async(req,res)=>{
    try{
        const vipGrickanja=await VipGrickanje.find();
        res.json(vipGrickanja);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/:id',async(req,res)=>{
    try{
        const vipGrickanje=await VipGrickanje.findById(req.params.id);
        if(vipGrickanje){
            res.json(vipGrickanje);
        }else{
            return res.status(404).json({message:'Grickanje nije pronađeno'});
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;