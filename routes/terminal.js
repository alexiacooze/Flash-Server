const express = require("express");
const router = express.Router();
const fs = require("fs");
const terminalFile = JSON.parse(fs.readFileSync("./data/terminal.json"));

router.route("/").get((req, res) => {
  console.log(terminalFile);
  res.json(terminalFile).status(200);
});

router.route("/:terminalid").get((req, res) => {
  const foundterminal = terminalFile.find((terminal) => req.params.terminalid === terminal.id);
  console.log(foundterminal);
  res.status(200).json(foundterminal);
});

module.exports = router;
