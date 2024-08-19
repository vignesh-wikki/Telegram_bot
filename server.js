const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./db/db");
connectDB();

const startBot = require("./bot/botStart");
startBot();

app.get("/test", async (req, res) => {res.send("telegram bot")});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
