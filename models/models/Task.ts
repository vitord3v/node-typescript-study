import { v4 as uuidv4 } from 'uuid';

class Task {
    id:string;
    title: string;
    description:string;
    isDone:boolean;

    constructor(title:string,description:string) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.isDone = false;
    }
}

export default Task;