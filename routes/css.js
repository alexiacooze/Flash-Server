const express = require("express");
const router = express.Router();
const fs = require("fs");
const cssFile = JSON.parse(fs.readFileSync("./data/css.json"));

router.route("/")
    .get((req, res) => {
        console.log(cssFile)
        res.json(cssFile).status(200);
    })

    router.route("/:cssid")
    .get((req, res) => {
        const foundCss = cssFile.find((css) => req.params.cssid === css.id
        );
        console.log(foundCss);
        res.status(200).json(foundCss);
      });

module.exports = router;
