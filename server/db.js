const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/account');

const db = mongoose.connection;
mongoose.Promise = global.Promise;
db.once("error", () => console.log("mongo connection error"));
db.once("open", () => console.log("mongo connection successed!"));

const loginSchema = mongoose.Schema({
  account: String,
  password: String
})
/*
定义模型model
*/


const Login = module.exports = mongoose.model('Login', loginSchema)
