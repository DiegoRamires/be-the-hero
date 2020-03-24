const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3333;

app.use(express.json());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(`${port}`, err => {
  if (err) {
    console.log("Oops! Something went wrong...", err);
  } else {
    console.log(`Server is running on "http://localhost:${port}"`);
  }
});
