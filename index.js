/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-28 13:54:37
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-28 14:45:21
 */
const fs = require("fs");
const path = require("path");
const express = require("express");
const qs = require("querystring");
const { addAliases } = require("module-alias");

addAliases({
  "@": __dirname + "/"
});
const app = express();

const cors = require("cors");
const Busboy = require("busboy");
const req = require("express/lib/request");
const node_respPath =
  __dirname
    .split(path.sep)
    .slice(0, __dirname.split(path.sep).length - 1)
    .join("\\") + "\\node_resp";

// const loginRouter = require("./Routes/login");
// const waferRouter = require("./Routes/wafer");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(loginRouter);
// app.use(waferRouter);
// app.use(videoRouter)
// app.use(musicRouter)

const router = express.Router();

router.get("/getWaferDotInfo", (req, res) => {
  res.send({
    data: "我尼玛"
  });
});
app.use(router);

app.listen(3001, () => {
  console.log("Express app started at port 3001");
});
