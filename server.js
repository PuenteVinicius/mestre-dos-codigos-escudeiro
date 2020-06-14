const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
const router = express.Router();
const http = require("http");

const app = express();
app.use(
  "/",
  router.get("/", (req, res) => {
    res.sendFile("/public/index.html", { root: __dirname });
  })
);
app.set("port", port);
app.use("/public", express.static(__dirname + "/public", ));

http.createServer(app).listen(app.get("port"), () => {
  console.log("Express Server escutando na porta " + app.get("port"));
});
