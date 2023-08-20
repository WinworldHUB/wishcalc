const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  fs.readFile("./README.md", "utf-8", (err, result) => {
    res.send(result);
  });
});

app.post("/add", (req, res) => {
  const number1 = req.query["number1"];
  const number2 = req.query["number2"];

  const result = Number(number1) + Number(number2);
  res.json({ status: "ok", result: result.toFixed() });
});

app.post("/subtract", (req, res) => {
  const number1 = req.query["number1"];
  const number2 = req.query["number2"];

  const result = Number(number1) - Number(number2);
  res.json({ status: "ok", result: result.toFixed() });
});

app.post("/multiply", (req, res) => {
  const number1 = req.query["number1"];
  const number2 = req.query["number2"];

  const result = Number(number1) * Number(number2);
  res.json({ status: "ok", result: result.toFixed() });
});

app.post("/divide", (req, res) => {
  const number1 = req.query["number1"];
  const number2 = req.query["number2"];

  const result = Number(number1) / Number(number2);
  res.json({ status: "ok", result: result.toFixed() });
});

app.listen(port, () => {
  console.log(`WISH Calculator APIs listening on port ${port}`);
});
