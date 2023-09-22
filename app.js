const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors=require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const user = require("./routes/userRoutes");
const campaign = require("./routes/campaignRoutes");
const payment = require("./routes/paymentRoutes");
const comment=require('./routes/commentRoutes')

app.use("/api/v1", user);
app.use("/api/v1", campaign);
app.use("/api/v1", comment);
app.use('/api/v1',payment);
app.get("/api/v1/getKey", (req, res) => {
  res.status(200).json({
    key: process.env.RAZORPAY_API_KEY,
  });
});
module.exports = app;
