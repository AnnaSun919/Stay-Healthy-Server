const express = require("express");
const router = express.Router();
const ActivityModel = require("../models/Activity.model");

router.post("/activity/create", (req, res) => {
  const { time, date, name, image, description, location, category, creater } =
    req.body;

  // if (!name || !date || !time || !description) {
  //   res.status(500).json({
  //     errorMessage: "Please enter all field",
  //   });
  //   return;
  // }

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
module.exports = router;
