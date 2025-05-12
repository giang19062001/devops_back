const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const app = express();
app.use(
   cors({
      origin: "*", // Allow all origins
      credentials: true, // Allow credentials (cookies, etc.)
   })
);
app.use(
   express.json({
      limit: "1000mb",
   })
);
app.use(
   express.urlencoded({
      limit: "1000mb",
      extended: false,
   })
);

app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "/assets")));
app.use("/plugins", express.static(path.join(__dirname, "/plugins")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));
app.use("/public", express.static(path.join(__dirname, "/public")));

const { mysqlPool } = require("./config/database.js");

app.get("/products", async (req, res) => {
   const [data] = await mysqlPool.query(" SELECT * FROM products");
   res.status(200).json(data);
});
app.get("/user", async (req, res) => {
   res.status(200).json({ username: "Giang ngo" });
});

app.use(function (req, res, next) {
   next(createError(404));
});

app.use(function (err, req, res, next) {
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};

   res.status(err.status || 500);
   res.render("error");
});

module.exports = app;
