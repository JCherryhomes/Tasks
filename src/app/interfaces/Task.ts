export enum TaskState {
    backlog,
    inProgress,
    complete
}

export class Task {
    state: TaskState;
    description: string;
}

export class SwimLane {
    title: string;
    tasks: Array<Task>;
}
