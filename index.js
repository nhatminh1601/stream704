const express = require('express');
const AppPath='D:\\steam704';
const app=express();
app.set('view engine' ,'ejs');
app.set(AppPath+'/views',AppPath+'/views');

app.get('/',(req,res)=>{ res.render('home')});

app.listen(3000,()=>console.log('Server Started'));