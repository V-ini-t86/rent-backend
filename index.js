const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
require("./db/connection");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("helal");
});

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT} ...`);
});
