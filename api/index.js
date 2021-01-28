const express               = require("express");
const app                   = express();
                              require("./config/server.js")(app);

const blog                  = require("./routes/blog/index.js");
const message               = require("./routes/message/index.js");

app.use("/", blog);
app.use("/", message);

module.exports = {
  path: "/api",
  handler: app
}
