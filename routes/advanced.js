const express = require("express");
const router = express.Router();
const fs = require("fs");
const advancedFile = JSON.parse(fs.readFileSync("./data/advanced.json"));

router.route("/")
    .get((req, res) => {
        console.log(advancedFile)
        res.json(advancedFile).status(200);
    })

    router.route("/:advancedid")
    .get((req, res) => {
        const foundadvanced = advancedFile.find((advanced) => req.params.advancedid === advanced.id
        );
        console.log(foundadvanced);
        res.status(200).json(foundadvanced);
      });

module.exports = router;
