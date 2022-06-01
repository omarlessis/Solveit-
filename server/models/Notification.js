const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    userImage: {
      type: String,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  {
    timestamps: false,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
