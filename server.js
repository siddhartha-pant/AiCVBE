require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

connectToDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
