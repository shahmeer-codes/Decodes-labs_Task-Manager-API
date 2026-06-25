const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Task title is required",
    });
  }

  if (
    status &&
    status !== "Pending" &&
    status !== "Completed"
  ) {
    return res.status(400).json({
      success: false,
      message: "Status must be Pending or Completed",
    });
  }

  next();
};

module.exports = validateTask;
