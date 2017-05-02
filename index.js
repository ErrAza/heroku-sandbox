var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Pug Check!");
});

app.listen(3000);