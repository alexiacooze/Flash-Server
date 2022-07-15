const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()
const PORT = process.env.PORT || 8080;

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

const advancedRoutes = require("./routes/advanced");
app.use("/advanced", advancedRoutes);

const cssRoutes = require("./routes/css");
app.use("/css", cssRoutes);

const responsiveRoutes = require("./routes/responsive");
app.use("/responsive", responsiveRoutes);

const scssRoutes = require("./routes/scss");
app.use("/sass", scssRoutes);

const jsBasicRoutes = require("./routes/jsBasic");
app.use("/js-basic", jsBasicRoutes);

const jsAdvancedRoutes = require("./routes/jsAdvanced");
app.use("/js-advanced", jsAdvancedRoutes);

const domRoutes = require("./routes/domManipulation");
app.use("/dom", domRoutes);

const es6Routes = require("./routes/es6");
app.use("/es6", es6Routes);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
