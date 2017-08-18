const express = require('express');

//create app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('express server is up and running on port ' + PORT);
});