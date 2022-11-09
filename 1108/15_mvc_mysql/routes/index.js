const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors); //전체 조회

//POST /visitor/write => localhost:PORT/visitor/write
router.post("/visitor/write", controller.postVisitor); // 하나 추가

router.delete("/visitor/delete", controller.deleteVisitor); //하나 삭제

module.exports = router;
