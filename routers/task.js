const express = require("express");
const router = express.Router();
const Saa = require("../models/S-task");

router.get("/", async (req, res) => {
  try {
    const task = await Saa.find();
    res.json(task);
  } catch (err) {
    res.send(`wrongid ${err}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tasks = await Saa.findById(req.params.id);
    res.json(tasks);
  } catch (err) {
    res.send(`Error ${err}`);
  }
});

router.post("/", async (req, res) => {
  const tasks = new Saa({
    name: req.body.name,
    teh: req.body.tech,
    Like: req.body.Like,
  });
  try {
    const a1 = await tasks.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const task = await Saa.findById(req.params.id);
    task.Like = req.body.Like;
    const a1 = await task.save();
    res.json(a1);
  } catch (err) {
    res.send(`erro${err}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await Saa.findById(req.params.id);
    task.Like = req.body.Like;
    const a1 = await task.remove();
    res.json(a1);
  } catch (err) {
    res.send(`erro${err}`);
  }
});

module.exports = router;
