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

const conditionalsRoutes = require("./routes/conditionals");
app.use("/conditionals", conditionalsRoutes);

const routingRoutes = require("./routes/routing");
app.use("/routing", routingRoutes);

const htmlBasicRoutes = require("./routes/htmlBasics");
app.use("/html-basics", htmlBasicRoutes);

const elementsRoutes = require("./routes/elements");
app.use("/elements-attributes", elementsRoutes);

const formsRoutes = require("./routes/forms");
app.use("/forms", formsRoutes);

app.listen(PORT, () => console.log("Listening on http://localhost:${PORT}"));
