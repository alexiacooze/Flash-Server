const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());
app.use(express.json());

const reactRoutes = require("./routes/react");
app.use("/react", reactRoutes);

app.listen(PORT, () => console.log("Listening on http://localhost:${PORT}"));
