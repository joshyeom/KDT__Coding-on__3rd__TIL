const mysql = require("mysql");

// DB 연결 정보
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "kdt",
});

exports.getVisitors = (callback) => {
  // before
  // return [
  //   { id: 1, name: '홍길동', comment: '내가 왔다.' },
  //   { id: 2, name: '이찬혁', comment: '으라차차' },
  // ];

  // after - mysql 연결
  // query(SQL, callback)
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }

    console.log("Visitor.js", rows);
    callback(rows);
  });
};

exports.postVisitor = (data, callback) => {
  conn.query(
    `INSERT INTO visitor (name,comment) VALUES('${data.name}','${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log("Visitor.js", rows);
      callback(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  // id: 사용자가 삭제버튼을 클릭한 그 행의 id 값
  console.log("id: ", id);
  conn.query(`DELETE FROM visitor WHERE id =${id};`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Visitor.js: ", rows);
    callback(true); //true: 삭제 성공을 의미;
  });
};
