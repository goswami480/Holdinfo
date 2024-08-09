const gettickers=require("./index")
const express=require('express')
const router=express.Router()
const getSavedTickers=require('./authcontroller')

router.get("/gettickers",gettickers)
router.get("/saveddata",getSavedTickers)

module.exports=router