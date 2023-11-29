const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://tkachuky105:NpydfiCUzIg86hkX@cluster0.oy2puwj.mongodb.net/db_contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
