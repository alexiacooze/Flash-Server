const express = require("express");
const router = express.Router();
const fs = require("fs");
const stateFile = JSON.parse(fs.readFileSync("./data/state.json"));

router.route("/")
    .get((req, res) => {
        console.log(stateFile)
        res.json(stateFile).status(200);
    })

    router.route("/:stateid")
    .get((req, res) => {
        const foundstate = stateFile.find((state) => req.params.stateid === state.id
        );
        console.log(foundstate);
        res.status(200).json(foundstate);
        
      });

module.exports = router;
