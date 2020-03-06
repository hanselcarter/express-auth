const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "blanca olmedo",
      description: "fav book you should not access with out a proper token"
    }
  });
  //we also can have access to the user stored in the headers
  //res.send(req.user)
});

module.exports = router;
