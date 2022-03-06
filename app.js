var mysql = require('mysql');

var con = mysql.createConnection({
  host: "208.76.87.109",
  user: "aogmapax_user",
  password: "secret",
  database: "aogmapax_test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM products", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});