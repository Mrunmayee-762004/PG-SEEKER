const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const multerParse = multer();
const pug = require("pug");
const pgRouter = require("./routes/pgrouter");
const reviewRouter = require("./routes/reviewRouter");
const userRouter = require("./routes/userRouter");
const globalErrorHandler = require("./controllers/errorController.js");

const app = express();


app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARES
// app.use(multerParse.none());

app.use(cookieParser());
app.use(cors({origin: "https://bachelor-sdam.netlify.app"}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/pg", pgRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/user", userRouter);

app.use(globalErrorHandler);

module.exports = app;
