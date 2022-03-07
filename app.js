var express = require('express');
const mysql = require('mysql');
var app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: "208.76.87.109",
  user: "aogmapax_user",
  password: "secret"
  //database: "aogmapax_test"

  // host: "localhost",
  // user: "root",
  // password: "secret"
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.get('/', (req, res) => {
  //connection.query('SELECT * FROM activities')
  res.send("Hello");
  let result = connection.query('SELECT * FROM battery');
  res.send(result);
  // const temp = {a: "Apple"}
  // res.status(200).json(temp);
})

app.listen(port, () => console.log(`Running on port ${port}`))


//module.exports = app;