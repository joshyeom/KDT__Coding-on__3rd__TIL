const User = require("../model/User");

// GET /user
exports.user = (req, res) => {
  console.log(User.userInfo());
  // {
  //     realId: 'helloworld',
  //     realPw: 'qwer1234*',
  //     name: '홍길동',
  //     age: 20,
  //   };
  res.render("user", { userInfo: User.userInfo() });
};
