const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;

  console.log(log);
  fs.appendFile('server.log',log+'\n',(err)=>{
    if(err){
      console.log('unable to append server.log')
    }
  });
  next();
});

app.use((req,res,next)=>{

  res.render('maintainance.hbs');
});

hbs.registerHelper('screamIt',(text)=>{

  return text.toUpperCase();
});

app.get('/',(req,res)=>{
  res.render('semester1.hbs',{
    Grade:'7 CGPA',
    BCA:'is a good experiance',
    Achievements:'Won Gold medal in Cricket'

  });
});

app.get('/sem2',(req,res)=>{
  res.render('semester2.hbs',{
    Grade:'7.20 CGPA',
    BCA:'is a good experiance',
    Achievements:'Scored  90 percent in GK quiz'

  });
});

app.get('/sem3',(req,res)=>{
  res.render('semester3.hbs',{
    Grade:'7.85 CGPA',
    BCA:'is a good experiance',
    Achievements:'won bronze cup in art competition'

  });
});

app.get('/sem4',(req,res)=>{
  res.render('semester4.hbs',{
    Grade:'8 CGPA',
    BCA:'is a good experiance',
    Achievements:'participated in defence expo'

  });
});

app.get('/sem5',(req,res)=>{
  res.render('semester5.hbs',{
    Grade:'8.30 CGPA',
    BCA:'is a good experiance',
    Achievements:' Participated in science congress 2019'

  });
});

app.get('/sem6',(req,res)=>{
  res.render('semester6.hbs',{
    Grade:'9 CGPA',
    BCA:'is a good experiance',
    Achievements:'Won silver cup in Atheletics'

  });
});

app.listen(3000,()=>{
  console.log('connected to port');

});
