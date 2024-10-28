/*
 * @Description: 
 * @Author: didadida262
 * @Date: 2024-10-28 13:54:37
 * @LastEditors: didadida262
 * @LastEditTime: 2024-10-28 14:23:16
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

// const loginRouter = require("./Routes/login");
const waferRouter = require("./Routes/wafer");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(loginRouter);
app.use(waferRouter);
// app.use(videoRouter)
// app.use(musicRouter)

// //Binding to localhost://3000
// app.listen(3000,'192.168.0.106',() => {
//     console.log('Express app started at port 3000');
// });
app.listen(3001, () => {
  console.log("Express app started at port 3001");
});
