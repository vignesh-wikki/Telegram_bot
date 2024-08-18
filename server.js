const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./db/db");
connectDB();

const startBot = require('./bot/botStart');
startBot();


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
