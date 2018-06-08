var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
//session
var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))


app.get('/', function(request, respond){
    console.log('======> inside "/"');
    respond.render('home');
})

app.get('/cars', function(request, respond){
    console.log('=====> indside "/cars"');
    respond.render('cars');
})

app.get('/cats', function(request, respond){
    console.log('=====> /cats');
    respond.render('cats');
})

app.get('/cars/new', function(request, respond){
    console.log('===> /cars/new ==> form.ejs');
    respond.render('form');
})





// // root route
// app.get('/', function (req, res){
//     res.render('index', {title: "my Express project"});
//   });


// app.post('/users', function (req, res){
//     console.log('inside users method!') //terminal
//     console.log("POST DATA \n\n", req.body)
//     req.session.name = req.body.name;
//     console.log(req.session.name);
//     res.redirect('/');
// })

// app.get("/users/:id", function (req, res){
//     console.log("The user id requested is:", req.params.id);
//     res.send("You requested the user with id=> " + req.params.id);
// });



app.listen(8000, function(){
    console.log("listening on 8000")
})