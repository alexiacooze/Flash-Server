const express = require("express");
const router = express.Router();
const fs = require("fs");
const importsFile = JSON.parse(fs.readFileSync("./data/imports.json"));

router.route("/")
    .get((req, res) => {
        console.log(importsFile)
        res.json(importsFile).status(200);
    })

    router.route("/:importsid")
    .get((req, res) => {
        const foundimports = importsFile.find((imports) => req.params.importsid === imports.id
        );
        console.log(foundimports);
        res.status(200).json(foundimports);
        
      });

module.exports = router;
