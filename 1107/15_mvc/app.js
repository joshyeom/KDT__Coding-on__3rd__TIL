const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MVC 패턴 적용
// ./routes/index.js: index는 생략 가능
const indexRouter = require("./routes");
// localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작
app.use("/", indexRouter);

// ./routes/user.js
const userRouter = require("./routes/user");
// localhost:PORT/user 경로를 기본으로 ./routes/user.js 파일에 선언한 대로 동작
app.use("/user", userRouter);

// [404 Error]
// (중요) 맨 마지막 라우트로 선언
// 그렇지 않으면 나머지 코드 무시됨
// * : all
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
