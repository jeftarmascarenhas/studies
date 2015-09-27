var express = require('express')
  , app = express()
  ;

app.set('port', process.env.PORT || 3000);

var fortunes =[
"Conquer your fears or they will conquer you.",
 "Rivers need springs.",
 "Do not fear what you don't know.",
 "You will have a pleasant surprise.",
 "Whenever possible, keep it simple."

];

var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/puclic'));

  app.get('/', function (req, res) {
  		res.render('home');
  });

  app.get('/about', function (req, res) {
      var randomFortune =
            fortunes[Math.floor(Math.random( * fortunes.length))];
  		res.render('about', {fortune: randomFortune});
  })

  //custom 404
  app.use(function (req, res) {
  		res.status(404);
  		res.render('404');
  });

  //custom 500
  app.use(function (err, req, res, next) {
  	console.error(err.stack);
  	res.status(500);
  	res.render(500);
  })

  app.listen(app.get('port'), function () {
  	console.log('Express started on http//:localhost:3000' +
  	app.get('port') + '; press Ctrl+C to terminate.');
  });