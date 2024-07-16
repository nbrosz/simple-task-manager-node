import { Request, Response } from 'express';
// import TaskService from '../services/taskService';
import { ITask } from '../models/task';

class TaskController {
  async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks: ITask[] = [ {
        title: "Task 1",
        description: "Description 1",
        completed: false,
        createdAt: new Date()
      }, {
        title: "Task 2",
        description: "Description 2",
        completed: true,
        createdAt: new Date()
      } ]; //await TaskService.getAllTasks();
      res.json(tasks);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }

        res.status(500).json({ error: 'Unknown error' });
    }
  }

//   async getTaskById(req: Request, res: Response): Promise<void> {
//     try {
//       const task = await TaskService.getTaskById(req.params.id);
//       if (!task) {
//         res.status(404).json({ message: 'Task not found' });
//       } else {
//         res.json(task);
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

//   async createTask(req: Request, res: Response): Promise<void> {
//     try {
//       const newTask: ITask = req.body;
//       const task = await TaskService.createTask(newTask);
//       res.status(201).json(task);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

//   async updateTask(req: Request, res: Response): Promise<void> {
//     try {
//       const updatedTask = await TaskService.updateTask(req.params.id, req.body);
//       if (!updatedTask) {
//         res.status(404).json({ message: 'Task not found' });
//       } else {
//         res.json(updatedTask);
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }

//   async deleteTask(req: Request, res: Response): Promise<void> {
//     try {
//       const task = await TaskService.deleteTask(req.params.id);
//       if (!task) {
//         res.status(404).json({ message: 'Task not found' });
//       } else {
//         res.json({ message: 'Task deleted' });
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
}

module.exports = new TaskController();