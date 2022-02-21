const express = require("express");
const router = express.Router();
const data = require("../data");
const userData = data.users;

router.route("/").get(async (req, res) => {
  try {
    const peopleList = await userData.getPeople();
    res.json(peopleList);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const person = await userData.getPeopleById(req.params.id);
    res.json(person);
  } catch (e) {
    res.status(404).json(e);
  }
});

module.exports = router;