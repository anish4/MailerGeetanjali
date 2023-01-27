const Sib = require("sib-api-v3-sdk");

const client = Sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.API_KEY;

const tranEmailApi = new Sib.TransactionalEmailsApi();

const sendMailToCustomer = (name, email) => {
  const sender = {
    email: "hrgeetanjali2062@gmail.com",
    name: "Geetanjali School/College",
  };
  const receivers = [
    {
      email,
    },
  ];
  const sendCustomer = tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: "Thank you for contacting us",
    textContent: `
        Dear {{params.name}}, we have received your mail mail. We will get back to you as soon as possible.Thank you!
        `,
    htmlContent: `
        <h1>Dear {{params.name}},</h1>
        <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
        <hr>
        <strong>Geetanjali School/College</strong>
        <p>Nayabazaar,Khusibu,Kathmandu</p>
                `,
    params: {
      name,
    },
  });
  return sendCustomer;
};

const sendContactMailToHR = (info) => {
  const sender = {
    email: "hrgeetanjali2062@gmail.com",
    name: "Geetanjali School/College",
  };
  const receivers = [
    {
      email: "anishniraula85@gmail.com",
    },
  ];
  const sendContact = tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: `New email received for contact`,
    textContent: `
          New email received from ${info.name} for the new admission--from contact page--
          
          `,
    htmlContent: `
          <h5> New email received from ${info.name} for the new admission--from contact page--</h5>
          <strong>Deatils:</strong><br>
          <p>Fullname: ${info.name}</p>
          <p>Phone Number: ${info.phoneNumber}</p>
          <p>Email Address: ${info.email}</p>
          <p>Message: ${info.message}</p>
          <hr>
          <strong>Geetanjali School/College</strong>
          <p>Nayabazaar,Khusibu,Kathmandu</p>
                  `,
  });
  return sendContact;
};
const sendAdmissionMailToHR = (info) => {
  const sender = {
    email: "hrgeetanjali2062@gmail.com",
    name: "Geetanjali School/College",
  };
  const receivers = [
    {
      email: "anishniraula85@gmail.com",
    },
  ];
  const sendAdmission = tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: `New email received for admission`,
    textContent: `
            New email received from ${info.name} for the new admission--from admission page--
            
            `,
    htmlContent: `
            <h5> New email received from ${info.name} for the new admission--from contact page--</h5>
            <strong>Deatils:</strong><br>
            <p>Fullname: ${info.name}</p>
            <P>Parent's Name: ${info.parentName}</P>
            <p>Phone Number: ${info.phoneNumber}</p>
            <p>Email Address: ${info.email}</p>
            <P>Gender: ${info.gender}</P>
            <P>Date of birth: ${info.dateOfBirth}</P>
            <p>level: ${info.level}</p>
            <p>Message: ${info.message}</p>
            <hr>
            <strong>Geetanjali School/College</strong>
            <p>Nayabazaar,Khusibu,Kathmandu</p>
                    `,
  });
  return sendAdmission;
};
const sendprePrimaryMailToHR = (info) => {
  const sender = {
    email: "hrgeetanjali2062@gmail.com",
    name: "Geetanjali School/College",
  };
  const receivers = [
    {
      email: "anishniraula85@gmail.com",
    },
  ];
  const sendprePrimary = tranEmailApi.sendTransacEmail({
    sender,
    to: receivers,
    subject: `New email received for admission of Pre-Primary`,
    textContent: `
            New email received from ${info.name} for the new admission--from pre-primary page--
            
            `,
    htmlContent: `
            <h5> New email received from ${info.name} for the new admission--from contact page--</h5>
            <strong>Deatils:</strong><br>
            <p>Fullname: ${info.name}</p>
            <P>Parent's Name: ${info.parentName}</P>
            <p>Phone Number: ${info.phoneNumber}</p>
            <p>Email Address: ${info.email}</p>
            <P>Gender: ${info.gender}</P>
            <P>Date of birth: ${info.dateOfBirth}</P>
            <p>Message: ${info.message}</p>
            <p>level: ${info.level}</p>
            <hr>
            <strong>Geetanjali School/College</strong>
            <p>Nayabazaar,Khusibu,Kathmandu</p>
                    `,
  });
  return sendprePrimary;
};

module.exports = {
  sendMailToCustomer,
  sendContactMailToHR,
  sendAdmissionMailToHR,
  sendprePrimaryMailToHR,
};
