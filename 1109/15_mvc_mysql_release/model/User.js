const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.post_signup = (data, cb) => {
  const sql = `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}', '${data.name}', '${data.passoword}')`;
  conn.query(sql, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log(rows);
    cb();
  });
};
