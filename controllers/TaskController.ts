import express from 'express';
import Task from '../models/Task';

const router = express.Router();

let tasks: Task[] = []

router.get('/', (req, res) => {
    res.json(tasks);
  });
  

router.post('/', (req,res) => {
    const task = new Task(req.body.title, req.body.description)
    tasks.push(task)
    res.status(201).json(task)
})

router.put('/:id', (req,res) => {
    const task = tasks.find(t => t.id === req.params.id)
    if (task) {
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.isDone = req.body.isDone || task.isDone;
        res.json(task)
    } else {
        res.status(404).json({ message: 'Task not found' })
    }
})

router.delete('/:id', (req,res) => {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);
    if(taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).end()
    } else {
        res.status(404).json({ message: 'Task not found' })
    }
})

export default router;