import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IList, ITask } from '../model/interfaces/lists';
import { mockLists } from '../mock-data/lists.mock';
import { LoginService } from '../users/login.service';

@Injectable({ providedIn: 'root' })
export class ListsService {
    private readonly _lists: BehaviorSubject<IList[]> = new BehaviorSubject(null);
    lists = this._lists.asObservable();

    private readonly _selectedList: BehaviorSubject<IList> = new BehaviorSubject(null);
    selectedList = this._selectedList.asObservable();

    constructor(
        private loginService: LoginService,
    ) {
        const lists = mockLists;
        this._lists.next(lists);
        this._selectedList.next(lists[0]);
    }

    setSelectedList(listId: number): void {
        const lists = this._lists.getValue();
        const selectedList = lists.find(list => list.id === listId);
        this._selectedList.next(selectedList);
    }

    toggleTaskDone(taskId: number): void {
        const lists = this._lists.getValue();
        const selectedListId = this._selectedList.getValue().id;
        const selectedList = lists.find(list => list.id === selectedListId);
        const selectedTask = selectedList.tasks.find(task => task.id === taskId);
        selectedTask.done = !selectedTask.done;
        this._lists.next(lists);
        this._selectedList.next(selectedList);
    }

    addList(listName: string): void {
        const lists = this._lists.getValue();
        const nextListId = lists && lists.length ? lists.map(list => list.id).sort().reduce((prev, curr) => curr) + 1 : 1;
        const newList: IList = {
            name: listName,
            id: nextListId,
            tasks: [],
            userId: this.loginService.currentLoggedInUserId,
        };
        lists.unshift(newList);
        this._lists.next(lists);
        this._selectedList.next(newList);
    }

    addTask(taskName: string): void {
        const lists = this._lists.getValue();
        const selectedListId = this._selectedList.getValue().id;
        const selectedList = lists.find(list => list.id === selectedListId);
        const nextTaskId = selectedList && selectedList.tasks && selectedList.tasks.length ? selectedList.tasks.map(task => task.id).sort().reduce((prev, curr) => curr) + 1 : 1;
        const newTask: ITask = {
            name: taskName,
            id: nextTaskId,
            userId: this.loginService.currentLoggedInUserId,
            listId: selectedListId,
            done: false,
        };
        selectedList.tasks.unshift(newTask);
        this._lists.next(lists);
        this._selectedList.next(selectedList);
    }
}
