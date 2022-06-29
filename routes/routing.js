const express = require("express");
const router = express.Router();
const fs = require("fs");
const routingFile = JSON.parse(fs.readFileSync("./data/routing.json"));

router.route("/")
    .get((req, res) => {
        console.log(routingFile)
        res.json(routingFile).status(200);
    })

    router.route("/:routingid")
    .get((req, res) => {
        const foundrouting = routingFile.find((routing) => req.params.routingid === routing.id
        );
        console.log(foundrouting);
        res.status(200).json(foundrouting);
        
      });

module.exports = router;
