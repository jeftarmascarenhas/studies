var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');

//contador++;
var multiparty = require('multiparty');
var form = new multiparty.Form();


app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/',function (req, res) {
	res.send('teste');
});


app.post('/images/upload', function(req, res){
		form.parse(req, function(err, fields, files){
			var img = files.images[0];
		   
		   fs.readFile(img.path, function(err, data){

		    //var extensaoImg = img.originalFilename.substr(img.originalFilename.length - 4);
		    //var path = './public/img/imoveis/'+img.originalFilename.replace(extensaoImg, '_'+contador+extensaoImg);
		    var path = './public/images/upload/'+img.originalFilename;
		    
		    // console.log(path.substr(path.length - 4));

		    fs.writeFile(path, data, function(error){
		     if(error){ 
		      console.log(error);
		     }else{
		      res.sendFile(__dirname + '/public/partials/upload-images-success.html');
		     }
		    });

		   });			
		   
		});
});


app.use('*', function(req, res){
	res.status(404);
	res.send('Error 404 - Page Not Found');
});

app.listen(app.get('port'), function(){
	console.log('Server Started');
});