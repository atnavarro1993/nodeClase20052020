// imported modules
const express = require("express");
const morgan = require("morgan");
const router = require("../routes/index");

/* asigning express() to app, then tell express that morgan will
   be displayed on dev mode, then tell express to use router as a
   route
*/
const app = express();
app.use(morgan("dev"));
app.use(router);

app.listen(3000, () => {
  console.log(`Server listen on port ${3000}`);
});
