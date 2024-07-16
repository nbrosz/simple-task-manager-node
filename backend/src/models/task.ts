const mongoose = require('mongoose');
const Schema = mongoose.Schema;

export interface ITask {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Task', TaskSchema);