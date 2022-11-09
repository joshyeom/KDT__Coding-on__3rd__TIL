const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// "경로 설정" = 라우팅
// 기본 경로: localhost:PORT/user

// GET / => localhost:PORT/user/
router.get("/", controller.user);

module.exports = router;
