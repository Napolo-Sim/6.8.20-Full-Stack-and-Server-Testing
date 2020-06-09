const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/api", (request, result) => {
    result.json({ Message: "Hello from the API" });
    // sendFile(path.join(__dirname + "../client/index.html"))
});

router.get("/api2", (request, result) => {
    result.json({ Message: "THIS MESSAGE PROVES FULL-STACKNESS!!!" });
});

module.exports = router;