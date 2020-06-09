const express = require("express");
const app = express();
const PORT = 4000;
//const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

const clientRoutes = require("./routes/client-route");
app.use("/", clientRoutes);

const apiRoutes = require("./routes/api-routes");
app.use("/", apiRoutes);

//Client route
// app.get(`/`, (request, result) => {
//     result.sendFile(path.join(__dirname + "/client/index.html"))
// });

//API route
// app.get("/api", (request, result) => {
//     result.json({ Test: "full-Stack" });
// });

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));