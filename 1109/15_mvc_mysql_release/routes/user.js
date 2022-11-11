const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

router.get("/", controller.index);

router.get("signup", controller.signup);
router.post("signup", controller.post_signup);

router.get("signin", controller.signin);
