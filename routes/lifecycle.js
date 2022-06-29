const express = require("express");
const router = express.Router();
const fs = require("fs");
const lifecycleFile = JSON.parse(fs.readFileSync("./data/lifecycle.json"));

router.route("/")
    .get((req, res) => {
        console.log(lifecycleFile)
        res.json(lifecycleFile).status(200);
    })

    router.route("/:lifecycleid")
    .get((req, res) => {
        const foundlifecycle = lifecycleFile.find((lifecycle) => req.params.lifecycleid === lifecycle.id
        );
        console.log(foundlifecycle);
        res.status(200).json(foundlifecycle);
        
      });

module.exports = router;
