var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    //res.render('first_view');
    res.send("Without Pug");
});

app.listen(3000);