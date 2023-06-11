const express = require("express");
const cors = require("cors");
const noteRoute = require("./route/noteRoute");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server Started");
});

app.use("/api/v1", noteRoute);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
