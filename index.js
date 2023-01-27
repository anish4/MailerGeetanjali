require("dotenv").config();
const express = require("express");
const contactRoute = require("./routes/contact");
const admissionRoute = require("./routes/admission");
const prePrimaryRoute = require("./routes/preprimary");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/", contactRoute);
app.use("/", admissionRoute);
app.use("/", prePrimaryRoute);

app.listen(process.env.PORT, () =>
  console.log(`Server started at port ${process.env.PORT}`)
);
