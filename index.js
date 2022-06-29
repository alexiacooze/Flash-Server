const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());

const setupRoutes = require("./routes/setup");
app.use("/setup", setupRoutes);

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

const terminalRoutes = require("./routes/terminal");
app.use("/terminal", terminalRoutes);

const hooksRoutes = require("./routes/hooks");
app.use("/hooks", hooksRoutes);

const statesRoutes = require("./routes/state");
app.use("/state", statesRoutes);

app.listen(PORT, () => console.log("Listening on http://localhost:${PORT}"));
