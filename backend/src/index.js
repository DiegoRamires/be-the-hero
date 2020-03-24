const app = require("./app");
const port = 3333;

app.listen(`${port}`, err => {
  if (err) {
    console.log("Oops! Something went wrong...", err);
  } else {
    console.log(`Server is running on "http://localhost:${port}"`);
  }
});
