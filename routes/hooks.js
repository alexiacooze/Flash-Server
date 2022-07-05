const express = require("express");
const router = express.Router();
const fs = require("fs");
const hooksFile = JSON.parse(fs.readFileSync("./data/hooks.json"));

router.route("/")
    .get((req, res) => {
        console.log(hooksFile)
        res.json(hooksFile).status(200);
    })

    router.route("/:hooksid")
    .get((req, res) => {
        const foundhooks = hooksFile.find((hook) => req.params.hookid === hook.id
        );
        console.log(foundhooks);
        res.status(200).json(foundhooks);
        
      });

module.exports = router;
