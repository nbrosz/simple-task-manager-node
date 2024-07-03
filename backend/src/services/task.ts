const Task = require('../models/Task');

export const createTask = async ({title, description}: {title: String, description: String}) => {
  return Task.create({title, description});
};

export const fetchTasks = async () => {
  return Task.find();
};