const express = require("express");
const router = express.Router();
const CommentModel = require("../models/Comment.model");
const ActivityModel = require("../models/Activity.model");

router.post("/comment/create", (req, res) => {
  const { comment, creater, activity } = req.body;
  console.log(activity);

  if (!comment) {
    res.status(500).json({
      errorMessage: "Please write your comment here ",
    });
    return;
  }

  CommentModel.create({
    comment: comment,
    creater: creater,
    activity: activity,
  })
    .then((response) => {
      console.log(response.activity);
      return ActivityModel.findByIdAndUpdate(
        response.activity,
        { $push: { comments: response.activity } },
        { new: true }
      );
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

router.get("/comments", (req, res) => {
  console.log(`HIHI ${req.params}`);
  CommentModel.find()
    .populate("creater")
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
