var express = require('express');
const mysql = require('mysql');
var app = express();
const port = 3000;

var connection = mysql.createConnection({
  host: "208.76.87.109",
  user: "aogmapax_user",
  password: "secret",
  database: "aogmapax_products"
  // host: "localhost",
  // user: "root",
  // password: "secret"
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
//     connection.query("SELECT * FROM battery", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
});

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
}

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM products", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// app.get('/', (req, res) => {
//   //connection.query('SELECT * FROM activities')
//   //res.send("Hello");
//   //if (err) throw err;
//   let result = connection.executeQuery('SELECT * FROM battery');
//   //res.send(JSON.stringify(result));
//   //console.log(result)

// //   // const temp = {a: "Apple"}
// //   // res.status(200).json(temp);
// })

app.get('/', async (req, res) => {
  try {
    let result = await connection.executeQuery(`SELECT * FROM battery`)
    res.send(JSON.stringify(result))
  } catch (e) {
    console.log(e)
    res.status(500).json({error: e})
  }
})

app.get('/bing', async (req, res) => {
  try {
    let result = await connection.executeQuery(`SELECT * FROM battery`)
    res.send(JSON.stringify(result))
  } catch (e) {
    console.log(e)
    res.status(500).json({error: e})
  }
})

// gets a specific battery by id
app.get('/battery/:batteryid', async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000")

  try {
    let result = await connection.executeQuery(`SELECT * FROM battery WHERE id = ?`, [req.params.batteryid])
    res.send(JSON.stringify(result))
  } catch (e) {
    console.log(e)
    res.status(500).json({error: e})
  }
})

app.get('/bong', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8000")
  res.send("test");
})

app.listen(port, () => console.log(`Running on port ${port}`));

//module.exports = app;