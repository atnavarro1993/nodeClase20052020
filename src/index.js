// imported modules
const express = require("express");
const morgan = require("morgan");
const router = require("../routes/index");

const app = express();
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log(`Server listen on port ${3000}`);
});
