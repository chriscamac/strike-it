import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IList } from '../model/interfaces/lists';
import { mockLists } from '../mock-data/lists.mock';

@Injectable({ providedIn: 'root' })
export class ListsService {
    private readonly _lists: BehaviorSubject<IList[]> = new BehaviorSubject(null);
    lists = this._lists.asObservable();

    private readonly _selectedList: BehaviorSubject<IList> = new BehaviorSubject(null);
    selectedList = this._selectedList.asObservable();

    constructor() {
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
}
