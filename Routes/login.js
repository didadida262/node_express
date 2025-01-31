/*
 * @Description: /
 * @Author: didadida262
 * @Date: 2024-10-28 13:54:36
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-28 14:07:09
 */
// 登录路由
const { secretA } = require("@/utils/weapons");
const express = require("express");

const router = express.Router();

router.post("/signIn", (req, res) => {
  const token = secretA(req.body);
  const data = {
    data: req.body,
    token: token,
    code: 200
  };
  res.send(data);
});

router.post("/signOut", (req, res) => {
  res.send({
    code: 20000,
    data: {
      word: "out"
    }
  });
});

router.get("/getInfo", (req, res) => {
  res.send({
    code: 20000,
    data: {
      word: "百般乐器，唢呐为王，不是升天，就是拜堂",
      name: "hhvcg",
      avatar: ""
    }
  });
});

module.exports = router;
