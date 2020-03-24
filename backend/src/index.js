import "dotenv/config";
import app from "./app";

const port = process.env.PORT || 3333;

app.listen(`${port}`, err => {
  if (err) {
    console.log("Oops! Something went wrong...", err);
  } else {
    console.log(`Server is running on ${process.env.APP_URL}/${port}`);
  }
});
