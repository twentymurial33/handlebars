var express=require ("express")
var bodyParser=require("body-parser")
var path=require("path")
var exphbs=require('express-handlebars')


var app=express()

var PORT = process.env.PORT || 8000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});
