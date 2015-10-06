controller.enviaImagem = function(req, res){

  //contador++;
  var multiparty = require('multiparty');
  var form = new multiparty.Form();

  form.parse(req, function(err, fields, files){

   var img = files.images[0];
   var fs = require('fs');

   fs.readFile(img.path, function(err, data){

    //var extensaoImg = img.originalFilename.substr(img.originalFilename.length - 4);
    //var path = './public/img/imoveis/'+img.originalFilename.replace(extensaoImg, '_'+contador+extensaoImg);
    var path = './public/img/imoveis/'+img.originalFilename;
    
    // console.log(path.substr(path.length - 4));

    fs.writeFile(path, data, function(error){
     if(error){ 
      console.log(error);
     }else{
      res.sendfile('./public/partials/upload-images-success.html');
     }
    });

   });
  });
 };