const express = require("express");
const router = express.Router();
const fs = require("fs");
const scssFile = JSON.parse(fs.readFileSync("./data/scss.json"));

router.route("/").get((req, res) => {
  console.log(scssFile);
  res.json(scssFile).status(200);
});

router.route("/:scssid").get((req, res) => {
  const foundScss = scssFile.find(
    (scss) => req.params.scssid === scss.id
  );
  console.log(foundScss);
  res.status(200).json(foundScss);
});

module.exports = router;
