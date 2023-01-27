const express = require("express");
const router = express.Router();
const {
  sendMailToCustomer,
  sendprePrimaryMailToHR,
} = require("../utils/sendmail");

router.post("/contact", (req, res) => {
  console.log(req.body);
  const sendToCustomer = sendMailToCustomer(req.body.name, req.body.email);
  const sendToHR = sendprePrimaryMailToHR(req.body);
  Promise.all([sendToCustomer, sendToHR])
    .then(() => {
      res.status(200).json("Email sent successfully");
    })
    .catch((e) => {
      res.status(400).json("Error occured");
    });
});

module.exports = router;
