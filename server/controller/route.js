var express=require("express");
var path=require("path");

var router=express.Router();

var user_data=require("./..models/user-data.js");

router.get("/",function(req,res){
     res.render("home",{user:user_data});
})
module.export=router;