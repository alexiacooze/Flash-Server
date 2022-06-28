const express = require("express");
const router = express.Router();
const fs = require("fs");
const reactFile = JSON.parse(fs.readFileSync("./data/react.json"));

router.route("/")
    .get((req, res) => {
        console.log(reactFile)
        res.json(reactFile).status(200);
    })

    router.route("/:categoryid")
    .get((req, res) => {
        const foundCategory = reactFile.find((category) => req.params.categoryid === category.id
        );
        console.log(foundCategory);
        res.status(200).json(foundCategory);
        
      });

module.exports = router;
