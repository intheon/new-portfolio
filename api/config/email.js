let ret;

if (process.env.NODE_ENV == "development"){
  ret = require("./keys/email.js");
}
else {
  ret = {
    emailServerEndpoint: process.env.EMAIL_SERVER_ENDPOINT,
    emailPassword: process.env.EMAIL_PASSWORD,
  }
}

module.exports = ret;
