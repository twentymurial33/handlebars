var express=require ("express")
var bodyParser=require("body-parser")
var path=require("path")
var exphbs=require('express-handlebars')

var routes=require("./server/controller/route");

var app=express()
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	layoutsDir: 'client/public/views/layouts'
}));

var PORT = process.env.PORT || 5000;

app.listen(PORT, function(){
	console.log("Listening on PORT " + PORT);
});
