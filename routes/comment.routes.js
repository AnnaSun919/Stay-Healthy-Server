const express = require("express");
const router = express.Router();
const CommentModel = require("../models/Comment.model");
const ActivityModel = require("../models/Activity.model");

//create comment and insert comment to the activity model//
router.post("/comment/create", (req, res) => {
  const { comment, creater, activity, createrimg } = req.body;

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
    createrimg: createrimg,
  })
    .then((response) => {
      return ActivityModel.findByIdAndUpdate(
        response.activity,
        { $push: { comments: response } },
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

//get comments info//
router.get("/comments", (req, res) => {
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
