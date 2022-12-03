var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "tofi",
  password: "coraline",
  database: "accounts"
});

con.connect(function(err) {
  con.query("SELECT * FROM  login", function (err, result, fields) {
    if (err) {
      console.log(err);
      return;
    }
    console.log(result);
  });
  if (err) {
    console.log(err);
    return;
  }
});

           