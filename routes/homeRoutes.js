const express =require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/index',(req,res)=>{
    res.render('index')
})

router.get('/aboutus',(req,res)=>{
    res.render('aboutus')
})












module.exports=router