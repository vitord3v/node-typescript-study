import express from 'express';
import TaskController from './controllers/TaskController'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tasks', TaskController)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})