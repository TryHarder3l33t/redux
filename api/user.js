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
router.post("/", async (req, res) => {
  try {
    const data = await User.create({
      name: req.body.name,
    });
    console.log(data.name);
    // res.sendStatus(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  try {
    console.log("This is the body");
    console.log(req.body.id);

    const data = await User.findByPk(req.body.id);
    await data.destroy();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
