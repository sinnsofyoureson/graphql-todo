const express = require("express");

const app = express();
const PORT = 3004;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("Launch sequnce completed!");
});
