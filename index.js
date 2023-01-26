require("dotenv").config();
const express = require("express");
const Sib = require("sib-api-v3-sdk");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();
const sender = {
  email: "hrgeetanjali2062@gmail.com",
  name: "Geetanjali School/College",
};
const receivers = [
  {
    email: "saymynameheisenberg85@gmail.com",
  },
];

tranEmailApi
  .sendTransacEmail({
    sender,
    to: receivers,
    subject: "Thank you for contacting us",
    textContent: `
        Dear {{params.role}}, we have received your mail mail. We will get back to you as soon as possible.Thank you!
        `,
    htmlContent: `
        <h1>Dear {{params.role}},</h1>
        <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
        <hr>
        <strong>Geetanjali School/College</strong>
        <p>Nayabazaar,Khusibu,Kathmandu</p>
                `,
    params: {
      role: "Walter",
    },
  })
  .then(console.log)
  .catch(console.log);

app.listen(process.env.PORT, () =>
  console.log(`Server started at port ${process.env.PORT}`)
);
