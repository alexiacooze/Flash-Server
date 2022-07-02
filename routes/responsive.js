const express = require("express");
const router = express.Router();
const fs = require("fs");
const responsiveFile = JSON.parse(fs.readFileSync("./data/responsive.json"));

router.route("/")
    .get((req, res) => {
        console.log(responsiveFile)
        res.json(responsiveFile).status(200);
    })

    router.route("/:responsiveid")
    .get((req, res) => {
        const foundResponsive = responsiveFile.find((responsive) => req.params.responsiveid === responsive.id
        );
        console.log(foundResponsive);
        res.status(200).json(foundResponsive);
      });

module.exports = router;
