import { IList } from '../model/interfaces/lists';

export const mockLists: IList[] = [
    {
        id: 1,
        name: 'Shopping',
        userId: 1,
        tasks: [
            {
                id: 1,
                listId: 1,
                name: '3 avacados',
                userId: 1,
                done: false,
            },
            {
                id: 2,
                listId: 1,
                name: '1 gallon of milk',
                userId: 1,
                done: false,
            },
            {
                id: 3,
                listId: 1,
                name: 'cherry pop tarts',
                userId: 1,
                done: false,
            },
        ],
    },
    {
        id: 2,
        name: 'Erands',
        userId: 1,
        tasks: [
            {
                id: 4,
                listId: 2,
                name: 'get epoxy for guitar wall mount',
                userId: 1,
                done: false,
            },
        ],
    },
];
