const express = require("express");

const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  createTask,
} = require("../controllers/taskController");

const validateTask = require("../middleware/validateTask");

router.get("/", getAllTasks);

router.get("/:id", getTaskById);

router.post("/", validateTask, createTask);

module.exports = router;
