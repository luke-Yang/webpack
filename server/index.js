const api = require('./api');
// const fs = require('fs');
// const path = require('path');
const bodyParser = require('body-parser'); //引入处理post数据的模块
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use("/api", api);
app.listen(8088, () => {
  console.log("server run port 8088");
})
