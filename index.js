const express       = require('express');
const path          = require('path');
const app           = express();

const appRouting    = require('./routers/app-route');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/' + 'home.html'));
});

app.use('/assets',express.static(path.join(__dirname, 'assets')));

app.use('/', appRouting);

app.listen(8080, ()=>{
    console.log('Application running in port : 8080');
});

module.exports=app;