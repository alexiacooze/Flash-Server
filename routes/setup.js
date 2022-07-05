const express = require("express");
const router = express.Router();
const fs = require("fs");
const setupFile = JSON.parse(fs.readFileSync("./data/setup.json"));

router.route("/")
    .get((req, res) => {
        console.log(setupFile)
        res.json(setupFile).status(200);
    })

    router.route("/:setupid")
    .get((req, res) => {
        const foundSetup = setupFile.find((set) => req.params.setid === set.id
        );
        console.log(foundSetup);
        res.status(200).json(foundSetup);
        
      });

module.exports = router;
