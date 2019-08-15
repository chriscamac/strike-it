export interface IList {
    id: number;
    name: string;
    userId: number;
    tasks: ITask[];
}

export interface ITask {
    id: number;
    name: string;
    done: boolean;
    userId: number;
    listId: number;
}
