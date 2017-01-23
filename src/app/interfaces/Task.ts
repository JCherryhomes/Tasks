export enum TaskState {
    todo,
    inProgress,
    complete
}

export class Task {
    state: TaskState;
    description: string;
}

export class SwimLane {
    id: number;
    title: string;
    tasks: Array<Task>;
}
