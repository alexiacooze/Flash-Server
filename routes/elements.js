const express = require("express");
const router = express.Router();
const fs = require("fs");
const elementFile = JSON.parse(fs.readFileSync("./data/elements.json"));

router.route("/")
    .get((req, res) => {
        console.log(elementFile)
        res.json(elementFile).status(200);
    })

    router.route("/:elementid")
    .get((req, res) => {
        const foundElement = elementFile.find((element) => req.params.elementid === element.id
        );
        console.log(foundElement);
        res.status(200).json(foundElement);
        
      });

module.exports = router;
