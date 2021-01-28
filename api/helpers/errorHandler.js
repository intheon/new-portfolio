function errorHandler(res, e){
  console.log("ERROR RECEIVED ON NUXT!!");
  console.log(e);
  if (!e || !e.reason){
    return res.status(500).send({ "success": false, "error": "Server is having an issue" });
  }
  else {
    let customMessage = e.reason.includes("duplicate") ? "Duplicate Record. Use a unique value!" : e.reason;
    return res.status(e.httpCode).send({ "success": false, "reason": customMessage });
  }
}

module.exports = {
  errorHandler
}
