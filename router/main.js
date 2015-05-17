module.exports=function(app)
{
app.get('/',function(req,res){
res.render('index.html');
});

app.get('/drobboxCall',function(req,res){

var dbox = require("dbox");
var dapp = dbox.app({"app_key":"4gcbtkrnpk8rxxq","app_secret":"r8moojorlfug6u7"});

dapp.requesttoken(function(status,request_token){
	res.redirect(request_token.authorize_url);	
	}) 
});

app.get('/about',function(req,res){
res.render('about.html');
});
}


