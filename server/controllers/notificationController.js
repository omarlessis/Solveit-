const Notification = require ("../models/Notification")

// ALL NOTIFICATIONS
module.exports.getAll = async (req, res) => {
    try {
      const Notifications = await Notification.find({});
      var newNotifications = Notifications.filter(function (el) {
        return el.username != req.user.name
      });
      res.status(200).json({
        message: "Successfully fetched all the notifications",
        data: newNotifications,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error in fetching notifications!",
      });
    }
};