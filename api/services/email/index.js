const axios                   = require("axios");

const {
  emailServerEndpoint,
  emailPassword
}                             = require("../../config/email.js");

async function sendEmail(payload) {
  console.log("received email send request")
  console.log(payload)
  try {
    return await axios.post(`${ emailServerEndpoint }/email`, {
      message: payload.message,
      subject: payload.subject,
      recipients: payload.recipients,
      password: emailPassword
    });
  }
  catch (e){ throw e }
};

module.exports = { sendEmail };
