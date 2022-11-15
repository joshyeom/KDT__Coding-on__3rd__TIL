const express = require("express");
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require("http").Server(app);
const io = require("socket.io")(http); // http-socket 연결
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("chat");
});

const nickArray = {}; // 유저 목록

// io.on()
// : socket과 관련된 통신작업을 처리
io.on("connection", (socket) => {
  // "connection" event
  // : 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공!

  console.log("**** ⭕ Server Socket Connected >> ", socket.id);
  // socket.id: 소켓 고유 아이디 -> socket은 웹 페이지 별로 생김!!

  // [실습44] 채팅창 입장 안내 문구
  // io.emit('notice', `${socket.id.slice(0, 5)}님이 입장하셨습니다.`);

  // [실습44-2] 채팅창 입장 안내 문구 socket.id -> nickname
  socket.on("setNick", (nick) => {
    // 프론트에서 입력한 닉네임 값
    console.log("socket on setNick >> ", nick);

    //nickArray: {socketId1: nick1, socketId2: nick2, ...}
    // Object.values(): [ nick1, nick2, ...]
    // indexOf(): nick이 존재하는지.
    if (Object.values(nickArray).indexOf(nick) > -1) {
      socket.emit("error", "이미 존재하는 닉네임입니다. 다시 시도해주세요");
    } else {
      nickArray[socket.id] = nick; // { socket.id: nick }
      console.log("접속 유저 목록 >> ", nickArray);
      io.emit("notice", `${nick}님이 입장하셨습니다.`);
      socket.emit("entrySuccess", nick);
    }
  });

  socket.on("disconnect", () => {
    console.log("socket on disconnect >>", socket.id);
    io.emit("notice", `${nickArray[socket.id]}님이 퇴장하셨습니다.`);
    delete nickArray[socket.id];
    console.log(nickArray);
  });

  socket.on("send", (data) => {
    console.log("socket on send >>", data);
    const sendData = { nick: data.myNick, msg: data.msg };
    io.emit("newMessage", sendData);
  });
});

// 주의!!!) 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
