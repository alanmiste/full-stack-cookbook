// 1. import express and router
const express = require("express");
require("dotenv").config();

// 2. create server
const app = express();

const connectDB = require("./config/db");
connectDB();

/**
 * DEFINE ROUTES
 */
app.use("/recipes", require("./api/recipes"));
// 4. listen to some port

app.use(express.static("client/build"));

if (process.env.NODE_ENV === "production") {
  const path = require("path");

  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}
const port = process.env.PORT || 8008;
app.listen(port, () =>
  console.log("Server is UP and Running at port: " + port)
);
