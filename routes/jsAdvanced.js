const express = require("express");
const router = express.Router();
const fs = require("fs");
const jsAdvancedFile = JSON.parse(fs.readFileSync("./data/jsAdvanced.json"));

router.route("/")
    .get((req, res) => {
        console.log(jsAdvancedFile)
        res.json(jsAdvancedFile).status(200);
    })

    router.route("/:jsAdvancedid")
    .get((req, res) => {
        const foundJsAdvanced = jsAdvancedFile.find((jsAdvanced) => req.params.jsAdvancedid === jsAdvanced.id
        );
        console.log(foundJsAdvanced);
        res.status(200).json(foundJsAdvanced);
      });

module.exports = router;
