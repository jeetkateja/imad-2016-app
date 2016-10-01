var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var arr={
  one:{
        webdetails:'Details:1',
        webcontent:`
        <h3> Paragraph about me</h3>
        <p>var 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>
        <p> 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>
        <p> 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>`
    },
  two:{
        webdetails:'Details:2',
        webcontent:`
        <h3> Paragraph about me</h3>
        <p>var 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>
        <p> 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>
        <p> 
            Two
        </p>`
      
  },
  three:{
        webdetails:'Details:3',
        webcontent:`
        <h3> Paragraph about me</h3>
        <p>var 
            This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.This is about me.
        </p>
        <p> 
            Three
        </p>`
      
  }
};


function createTemplate(data)
{
var webcontent = data.webcontent;
var webdetails = data.webdetails;
var htmlTemplate=`
    <html>
    <head>
        <title>My profile : Jeet Kateja </title>
        <meta name="viewport" content="width-device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div>
            <h1>This is about me:1</h1>
        </div>
    <hr>
    <div>
        <a href="/">Home</a><br>
        <a href="/two">Two</a><br>
        <a href="/three">Three</a>
    </div>
    <div>
        <h2> ${webdetails}</h2>
        <b>Name</b>: Jeet Kateja<br>
        <b>Profession</b>: Software Engineer<br>
        <b>Hobbies</b>:Coding    
    </div>
    <div>
        ${webcontent}
    </div>
    </body>
</html>`;
return htmlTemplate;
}


//navigate to one.html
app.get('/:arrroute',function(req,res){
    var arr1= req.pramas.arrroute;
    res.send(createTemplate(arr[arr1]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
