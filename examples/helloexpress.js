var express = require('express')


var bodyParser = require('body-parser')

var ejs = require('ejs')

var app = express()
var urlEncodedParser = bodyParser.urlencoded({extended: false})

app.set('view engine','ejs')
app.set('views', __dirname+'/views')
app.get('/',function(req,res){
    //res.send("I am on home page " + __dirname)
   //res.sendFile(__dirname + '/home.html')
   res.render('home')
})

app.get('/about',function(req,res){
    //res.send("I am on about page")
    //res.sendFile(__dirname + '/about.html')
    console.log(req.query);
    
    res.render('about',{ urlData: req.query})
})

app.get('/contact',function(req,res){
    //res.send("I am on contact page")
    //res.sendFile(__dirname + '/contact.html')
    res.render('contact')
})
app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.body);
    res.send("Received Information " + JSON.stringify(req.body))
})

app.get('/profile/:name',function(req,res){
   // res.send("I am on profile page of " + req.params.id)
   var personData = {age:31,location:'BLR',hobbies:['dance','driving','reading','coding']}
    res.render('profile',{personName: req.params.name, data: personData})
})
app.post('/contact',urlEncodedParser,function(req,res){
    console.log(req.body);
    res.send("Received Information " + JSON.stringify(req.body))
   
})

app.listen(8888)