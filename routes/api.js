const express = require("express");
const router = express.Router();
const fs = require("fs");
const apiFile = JSON.parse(fs.readFileSync("./data/api.json"));

router.route("/")
    .get((req, res) => {
        console.log(apiFile)
        res.json(apiFile).status(200);
    })

    router.route("/:apiid")
    .get((req, res) => {
        const foundApi = apiFile.find((api) => req.params.apiid === api.id
        );
        console.log(foundApi);
        res.status(200).json(foundApi);
        
      });

module.exports = router;
