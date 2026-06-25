
const tasks = require("../data/tasks");

const getAllTasks = (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks,
  });
};

const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({
      success: false,
      message: "Task not found",
    });
  }

  res.status(200).json({
    success: true,
    data: task,
  });
};

const createTask = (req, res) => {
  const { title, status } = req.body;

  const newTask = {
    id: tasks.length + 1,
    title,
    status: status || "Pending",
  };

  tasks.push(newTask);

  res.status(201).json({
    success: true,
    message: "Task created successfully",
    data: newTask,
  });
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
};
