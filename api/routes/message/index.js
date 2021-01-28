const express                             = require("express");
const router                              = express.Router();

const { errorHandler }                    = require("../../helpers/errorHandler.js");

const {
  sendEmail,
}                                         = require("../../services/email/index.js");

router.post("/message", async (req, res) => {
  try {
    console.log("route: POST /message");
    console.log(req.body);

    const from = req.body.from;
    const name = req.body.name;
    const message = req.body.message;


    sendEmail({
      message: `<p>User: ${ from }</p><p>Name: ${ name }</p><p>Message: ${ message }</p>`,
      subject: `New message on vohzd.com`,
      recipients: ["messages@vohzd.com"]
    })

    res.send({
      "success": true
    });
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
