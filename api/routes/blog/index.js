const express                   = require("express");
const router                    = express.Router();

const { errorHandler }          = require("../../helpers/errorHandler.js");

const {
  getBlogs
}                               = require("../../services/blog/index.js");

router.get("/blogs", async (req, res) => {
  try {
    const response = await getBlogs();
    return res.send(response);
  }
  catch (e){ return errorHandler(res, e); }
});

module.exports = router;
