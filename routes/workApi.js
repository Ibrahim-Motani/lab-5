const express = require("express");
const router = express.Router();
const data = require("../data");
const workData = data.work;

router.route("/").get(async (req, res) => {
  try {
    const workList = await workData.getWork();
    res.json(workList);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const work = await workData.getWorkById(req.params.id);
    res.json(work);
  } catch (e) {
    res.status(404).json(e);
  }
});

module.exports = router;