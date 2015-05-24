var dbox = require("dbox");
var dapp = dbox.app({"app_key":"4gcbtkrnpk8rxxq","app_secret":"r8moojorlfug6u7"});

module.exports=function(app)
{
app.get('/',function(req,res){
res.render('index.html');
});

app.get('/drobboxCall',function(req,res){

dapp.requesttoken(function(status,request_token){
	res.redirect(request_token.authorize_url+'&oauth_callback=http://localhost:3000/dropboxCallBack');	
	console.log(request_token.authorize_url);
	requestToken = request_token;	
  }); 
});

app.get('/dropboxCallBack',function(req,res){
  dapp.accesstoken(requestToken, function(status, access_token){
  console.log(access_token);
  res.render('dropboxCallBack.html');
  var client = dapp.client(access_token);
   client.account(function(status, reply){
   console.log(reply)
   });
  }); 
});

app.get('/about',function(req,res){
res.render('about.html');
});
}


