var mysql = require('mysql');

var connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "test"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM product", function (err, result){
//     if (err) throw err;
//     console.log(result);
//   });
// });

connection.executeQuery = (query, queryParams) => {
  return new Promise((resolve, reject) => {
    connection.query(query, queryParams, (error, results) => {
      if (error) {
        reject(error)
        return
      }
      resolve(results)
    })
  })
};

module.exports = connection;