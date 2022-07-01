const express = require("express");
const router = express.Router();
const fs = require("fs");
const htmlBasicsFile = JSON.parse(fs.readFileSync("./data/htmlBasics.json"));

router.route("/")
    .get((req, res) => {
        console.log(htmlBasicsFile)
        res.json(htmlBasicsFile).status(200);
    })

    router.route("/:htmlBasicsid")
    .get((req, res) => {
        const foundhtmlBasics = htmlBasicsFile.find((htmlBasics) => req.params.htmlBasicsid === htmlBasics.id
        );
        console.log(foundhtmlBasics);
        res.status(200).json(foundhtmlBasics);
        
      });

module.exports = router;
