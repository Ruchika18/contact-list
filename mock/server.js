const express = require('express')
const app = express()
var api = require('./contactList.api.js')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/contact', function(req, res){
    res.json(api.getContactData());
});

module.exports = app
//app.listen(3000, () => console.log('Example app listening on port 3000!'))