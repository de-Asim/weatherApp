const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const port = 3000;

const staticPath=path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

console.log(staticPath);
app.use(express.static(staticPath));
app.get('',(req, res)=>{
    res.render('home');
})
app.get('/home',(req, res)=>{
    res.render('home');
})
app.get('/about',(req, res)=>{
    res.render('about');
})
app.get('/weather',(req, res)=>{
    res.render('weather');
})
app.get('*',(req, res)=>{
    res.render('404page');
})
app.listen(port,()=>{
    console.log('listening at port '+ port);
})
