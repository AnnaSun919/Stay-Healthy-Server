const express = require("express");
const router = express.Router();
const CommentModel = require("../models/Comment.model");

router.post("/comment/create", (req, res) => {
  const { comment, creater, activity } = req.body;

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
  console.log("hi");
  CommentModel.find()
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
