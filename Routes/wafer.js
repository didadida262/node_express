/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-28 13:54:36
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-28 14:09:16
 */
const express = require("express");
const fs = require("fs");
const { dotClass, waferInfo, dotData } = require("@/Data/circleData");

const router = express.Router();

router.get("/getWaferDotInfo", (req, res) => {
  res.send({
    data: dotData
  });
});

router.get("/getWaferInfo", (req, res) => {
  res.send({
    data: waferInfo
  });
});

module.exports = router;
