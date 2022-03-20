const User = require("../db/models/users");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const response = await User.findAll();
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
