const express = require("express");
const router = express.Router();
const ActivityModel = require("../models/Activity.model");

router.post("/activity/create", (req, res) => {
  const { time, date, name, image, description, location, category, creater } =
    req.body;

  if (!name || !date || !time || !description || !location) {
    res.status(500).json({
      errorMessage: "Please enter all field",
    });
    return;
  }

  ActivityModel.create({
    name: name,
    date: date,
    time: time,
    description: description,
    image: image,
    location: location,
    category: category,
    creater: creater,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        errorMessage: "Something went wrong! Go to sleep!",
        message: err,
      });
    });
});

router.get("/activities", (req, res) => {
  console.log("hi");
  ActivityModel.find()
    .then((activity) => {
      res.status(200).json(activity);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.get("/activity/:id/edit", (req, res) => {
  console.log("Hi");
  id = req.params.id;

  ActivityModel.findById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

router.patch("/activity/:id/edit", (req, res) => {
  let id = req.params.id;
  const { name, location, category } = req.body;
  ActivityModel.findByIdAndUpdate(
    id,
    { $set: { name: name, location: location, category: category } },
    { new: true }
  )
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

module.exports = router;
