let ret;

if (process.env.NODE_ENV == "development"){
  ret = {
    emailServerEndpoint: "YOUR_SERVER",
    emailPassword: "YOUR_PASSWORD",
  }
}
else {
  ret = {
    emailServerEndpoint: process.env.EMAIL_SERVER_ENDPOINT,
    emailPassword: process.env.EMAIL_PASSWORD,
  }
}

module.exports = ret;
