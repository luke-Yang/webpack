const Login = require('./db');
const express = require('express');
const router = express.Router();
/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/login/createAccount', (req, res) => {
  console.log(req.query)
  res.send('POST request to the homepage');
  // Login.create({
  //   account: "luke",
  //   password: "123"
  // }, (err, movie) => {
  //   if (err) {
  //     console.log(err)
  //     res.json(err)
  //   } else {
  //     res.json(movie)
  //   }
  // })
})
// 获取已有账号接口
router.get('/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  Login.findOne({
    _id: "59c20434bc89ec08f4526255"
  }).then(resp => {
    res.send(resp)
    console.log(resp, "resp")
  }).catch(err => {
    res.json(err)
  });
});

module.exports = router;
