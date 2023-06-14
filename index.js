var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1><h1>Welcome to Production Page</h1>");
  });
  
  app.listen(8080, () => {
    console.log("server started");
  });
  