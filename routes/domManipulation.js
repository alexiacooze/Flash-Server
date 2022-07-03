const express = require("express");
const router = express.Router();
const fs = require("fs");
const domFile = JSON.parse(fs.readFileSync("./data/domManipulation.json"));

router.route("/")
    .get((req, res) => {
        console.log(domFile)
        res.json(domFile).status(200);
    })

    router.route("/:domid")
    .get((req, res) => {
        const foundDom = domFile.find((dom) => req.params.domid === dom.id
        );
        console.log(foundDom);
        res.status(200).json(foundDom);
      });

module.exports = router;
