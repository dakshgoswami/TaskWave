const router = require("express").Router();
const Task = require("../models/task");
const User = require("../models/user");
const { authenticationToken } = require("./auth");

//creat-task
router.post("/create-task", authenticationToken, async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.headers;
    const newTask = new Task({ title: title, description: description });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//get all tasks
router.get("/get-all-tasks", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    });
    res.status(200).json({ data: userData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//delete tasks
router.delete("/delete-task/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Task.findByIdAndDelete(id);
    await User.findByIdAndDelete(userId, { $pull: { tasks: id}});
    res.status(200).json({ message: "Task Deleted!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//update api
router.put("/update-task/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(id, { title: title, description: description });
    res.status(200).json({ message: "Task Updated!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//update important task api
router.put("/update-imp-task/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const ImpTask = TaskData.important;
    await Task.findByIdAndUpdate(id, { important: !ImpTask });
    res.status(200).json({ message: "Task Updated!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//update complete task api
router.put("/update-complete-task/:id", authenticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const CompleteTask = TaskData.complete;
    await Task.findByIdAndUpdate(id, { important: !CompleteTask });
    res.status(200).json({ message: "Task Updated!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//get important tasks
router.get("/get-imp-tasks", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { important: true },
      options: { sort: { createdAt: -1 } },
    });
    const ImpTaskData = Data.tasks;
    res.status(200).json({ data: ImpTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//get completed tasks
router.get("/get-complete-tasks", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { complete: true },
      options: { sort: { createdAt: -1 } },
    });
    const CompleteTaskData = Data.tasks;
    res.status(200).json({ data: CompleteTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

//get pending tasks
router.get("/get-pending-tasks", authenticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: { complete: false },
      options: { sort: { createdAt: -1 } },
    });
    const PendingTaskData = Data.tasks;
    res.status(200).json({ data: PendingTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
