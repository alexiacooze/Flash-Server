const express = require("express");
const router = express.Router();
const fs = require("fs");
const jsBasicFile = JSON.parse(fs.readFileSync("./data/jsBasics.json"));

router.route("/")
    .get((req, res) => {
        console.log(jsBasicFile)
        res.json(jsBasicFile).status(200);
    })

    router.route("/:jsBasicid")
    .get((req, res) => {
        const foundJsBasic = jsBasicFile.find((jsBasic) => req.params.jsBasicid === jsBasic.id
        );
        console.log(foundJsBasic);
        res.status(200).json(foundJsBasic);
      });

module.exports = router;
