const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();

if (process.env.ENVIRONMENT === "development") {
    // Dev route
    app.use(express.static(path.join(__dirname, "client/public")));
  } else if (process.env.ENVIRONMENT === "production") {
    // Build route
    app.use(express.static(path.join(__dirname, "client", "build")));
  }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;

// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`)
);