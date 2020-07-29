/*
 * @Description: 测试demo
 * @Author: zsf
 * @Date: 2020-07-29 12:12:42
 */ 
var models = require('../mysql/index.js');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var conn = mysql.createConnection(models.mysql);
conn.connect();

// 获取模板数据
router.get('/test', (req, res) => {
  console.log("111111111")
  let params = req.query;
  let sql_name = `select test from test`;
  conn.query(sql_name, function (err, result) {
    if (err) {
      res.send({
        code: -1,
        result: 'fail'
      });
    } else if (result) {
      res.send({
        code: 1,
        result: 'success',
        data: result
      });
    } else {
      res.send({
        code: -1,
        result: '未知运行出错'
      });
    }
  })
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({
    code: -1,
    result: '未知运行出错'
  });
});

module.exports = router;