const express = require("express");
const router = express.Router();
const ActivityModel = require("../models/Activity.model");

const { isLoggedIn } = require("../middlewares/helper");

router.post("/activity/create", (req, res) => {
  const {
    time,
    date,
    name,
    image,
    description,
    location,
    category,
    creater,
    comments,
    joins,
  } = req.body;

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
    comments: comments,
    joins: joins,
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

router.get("/activity/:id", (req, res) => {
  id = req.params.id;
  ActivityModel.findById(id)
    .populate("creater")
    .populate("joins")
    .populate({
      path: "comments",
      populate: { path: "creater", select: "username image" },
    })

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

router.delete("/activity/:id", (req, res) => {
  console.log("delete");
  ActivityModel.findByIdAndDelete(req.params.id)
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
  const { name, location, time, category, description, date } = req.body;

  ActivityModel.findByIdAndUpdate(
    id,
    {
      $set: {
        name: name,
        location: location,
        category: category,
        time: time,
        date: date,
        description: description,
      },
    },
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

router.post("/activity/:id/join", isLoggedIn, (req, res) => {
  console.log("Join");
  const { join } = req.body;
  console.log(join);
  ActivityModel.findByIdAndUpdate(req.params.id)
    .then((response) => {
      return ActivityModel.findByIdAndUpdate(
        response,
        { $push: { joins: join } },
        { new: true }
      );
    })
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

module.exports = router;
