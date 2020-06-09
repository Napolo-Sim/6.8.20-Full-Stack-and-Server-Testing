const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (request, result) => {
    result.sendFile(path.join(__dirname + "../client/index.html"))
});

// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());
// router.use(express.static("./client/"));

module.exports = router;