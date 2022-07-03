const express = require("express");
const router = express.Router();
const fs = require("fs");
const es6File = JSON.parse(fs.readFileSync("./data/es6.json"));

router.route("/")
    .get((req, res) => {
        console.log(es6File)
        res.json(es6File).status(200);
    })

    router.route("/:es6id")
    .get((req, res) => {
        const foundEs6 = es6File.find((es6) => req.params.es6id === es6.id
        );
        console.log(foundEs6);
        res.status(200).json(foundEs6);
      });

module.exports = router;
