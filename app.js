var dbox = require("dbox");
var app = dbox.app({"app_key":"4gcbtkrnpk8rxxq","app_secret":"r8moojorlfug6u7"})
var authorization_url = ''

app.requesttoken(function(status,request_token){
	console.log(request_token)	
	authorization_url = request_token.authorize_url 
}) 

var express = require('express');
var app = express();


app.get('/', function(request,response) {	
	response.redirect(authorization_url);
});

/*app.post('/doStuff', function(request,response){
	var param = request.param('foo');

	response.send({
		foo:param
	});
}); */

app.listen(3000); 


/*var express = require("express");
var app = express();
app.get()*/	