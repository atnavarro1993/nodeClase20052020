// imported modules
const express = require("express");
const morgan = require("morgan");
const router = require("../routes/index");
const app = express();
/* asigning express() to app, then tell express that morgan will
   be displayed on dev mode, then tell express to use router as a
   route
*/

let port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(morgan("dev"));
app.use(router);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
