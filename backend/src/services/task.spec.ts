const mockingoose = require('mockingoose');
const TaskModel = require('../models/task');
const { createTask, fetchTasks } = require('./task');

describe('Task service', () => {
    describe('createTask', () => {
        it('should create a task', async () => {
        const task = { title: 'Task 1', description: 'Description 1' };
        mockingoose(TaskModel).toReturn(task, 'save');
        const result = await createTask(task);
        expect(result).toMatchObject(task);
        });
    });
    
    describe('fetchTasks', () => {
        it('should fetch all tasks', async () => {
        const tasks = [
            { title: 'Task 1', description: 'Description 1' },
            { title: 'Task 2', description: 'Description 2' }
        ];
        mockingoose(TaskModel).toReturn(tasks, 'find');
        const result = await fetchTasks();
        expect(result).toMatchObject(tasks);
        });
    });
});