const express = require("express");
const app = express();
const PORT = 8000;

//views 설정
app.set("view engine", "ejs");
// Middleware (미들웨어)
// : 요청(req)과 응답(res)의 중간에서 작업
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json 형태로 데이터를 전달받음

// Routing - 경로 설정
// -req(request): 요청(클라이언트 -> 서버)
// -res(response): 응답 (서버 -> 클라이언트)
app.get("/", function (req, res) {
  // GET // (http://localhost:PORT)
  res.render("index", { title: "요청 성공해따으" }); // views/index.ejs 파일을 찾아서 클라이언트에게 "응답"
});

app.get("/getForm", function (req, res) {
  // GET 요청은 req.query 객체에 폼 정보가 전달
  console.log(req.query);
  // res.send("get 요청 응답 성공");
  //http://localhost:8000/getForm?id={입력한 ID값}&password={입력한 PW값}

  res.render("result", { title: "GET 요청 성공해따으", userInfo: req.query });
});

app.post("/postForm", function (req, res) {
  //POST 요청은 req.body 객체에 폼 정보가 전달
  //http://localhost:8000/postForm 유저가 입력한 값이 나오지 않는다.
  res.render("result", { title: "POST 요청 성공해따으", userInfo: req.body });
});
app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
