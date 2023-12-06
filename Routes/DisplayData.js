const express = require('express');
const { route } = require('./CreateUser');
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try{
        res.send([global.fooditems,global.foodCategory ])
    }catch(error){
        res.send("Server Error")
    }
})

 module.exports = router;