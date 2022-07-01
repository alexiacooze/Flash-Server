const express = require("express");
const router = express.Router();
const fs = require("fs");
const formsFile = JSON.parse(fs.readFileSync("./data/forms.json"));

router.route("/")
    .get((req, res) => {
        console.log(formsFile)
        res.json(formsFile).status(200);
    })

    router.route("/:formsid")
    .get((req, res) => {
        const foundForms = formsFile.find((forms) => req.params.formsid === forms.id
        );
        console.log(foundForms);
        res.status(200).json(foundForms);
      });

module.exports = router;
