const express = require("express");
const router = express.Router();
const fs = require("fs");
const conditionalsFile = JSON.parse(fs.readFileSync("./data/conditionals.json"));

router.route("/")
    .get((req, res) => {
        console.log(conditionalsFile)
        res.json(conditionalsFile).status(200);
    })

    router.route("/:conditionalsid")
    .get((req, res) => {
        const foundconditionals = conditionalsFile.find((conditionals) => req.params.conditionalsid === conditionals.id
        );
        console.log(foundconditionals);
        res.status(200).json(foundconditionals);
        
      });

module.exports = router;
