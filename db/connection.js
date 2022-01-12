const mongoose = require("mongoose");
require("dotenv").config();

module.exports = mongoose
  .connect(process.env.MONGODB_DATABASE, {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
  })
  .then((conn) => {
    console.log(`database connected successfully`);
  })
  .catch((err) => {
    console.log(err);
  });
