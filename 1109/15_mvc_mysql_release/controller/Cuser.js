const User = require("../model/User");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.post_signup = (req, res) => {
  User.post_signup = (req.body, (result) => {
    res.send(true);
  });
};

 
exports.post_signin = (req, res) => {
  User.post_signup = (req.body, (result) => {
    if(result.length < 0)
  })
}