const router = require("express").Router();
const User = require("../model/User");
const Realm = require("../model/Realm");

//This will route to /api/users/register
router.post("/user/register", async (req, res) => {
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(`ERROR: ${err.message}`);
  }
});

router.post("/realm/create_realm", async (req, res) => {
  const realm = new Realm({
    realmName: req.body.realmName,
    adminGroup: req.body.adminGroup
  });

  try {
    const savedRealm = await realm.save();
    res.send(savedRealm)
  } catch (err) {
    res.status(400).send(`ERROR: ${err.message}`);
  }
});

//route to /api/users/login
router.post("/user/login", (req, res) => {
  res.send("Successfully Logged in");
});

module.exports = router;
