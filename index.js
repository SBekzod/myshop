const fs = require("fs");
const http = require("http");
const moment = require("moment");
const express = require("express");
const router = require("./router");
console.log("The server started at", moment.utc().format());

// create data for our server
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR: ", err);
  } else {
    user = JSON.parse(data);
  }
});

// build express server
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/", router);

const server = http.createServer(app);
const port = 3003;
server.listen(port, function () {
  console.log("Your server is running on port: ", port);
});
