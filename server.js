const express = require('express');
const app = express();
const port = 5000;


app.set('view engine', 'ejs');
app.use(express.static('views'));

app.use((req,res,next) => {
    const date = new Date();
    const day = date.getDay(); 
    const hour = date.getHours();
    //req.workinghours=(day >= 1 && day <= 5 && hour >= 9 && hour <= 17)    //here test closing hours
    req.workinghours=(day >= 0 && day <= 6 && hour >= 00 && hour <= 23)     //here test opening hours
    next()
  
  });
 

app.get('/',(req,res)=>{
    res.render('home', { workinghours: req.workinghours })
})

app.get('/services',(req,res)=>{
    res.render(__dirname+'/views/services.ejs',{ workinghours: req.workinghours })
})

app.get('/contact',(req,res)=>{
    res.render(__dirname+'/views/contact.ejs',{ workinghours: req.workinghours })
})
app.listen(port, console.log('App is live now on port ' + port));





  
 
