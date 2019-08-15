import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { IList } from 'src/app/model/interfaces/lists';

@Component({
    selector: 'app-list-of-lists',
    styleUrls: ['./list-of-lists.component.scss'],
    templateUrl: './list-of-lists.component.html',
})
export class ListOfListsComponent implements OnInit {
    lists: IList[] = [];
    selectedListId = 0;

    get hasLists(): boolean {
        return this.lists && this.lists.length ? true : false;
    }

    constructor(private listsService: ListsService) {}

    ngOnInit(): void {
        this.listsService.lists.subscribe(lists => {
            this.lists = lists || [];
            console.log(this.lists);
        });
        this.listsService.selectedList.subscribe(selectedList => {
            this.selectedListId = (selectedList && selectedList.id) || 0;
        });
    }

    select(list: IList): void {
        if (this.selectedListId === list.id) {
            return;
        }
        this.listsService.setSelectedList(list.id);
    }

    addList(listName: string): void {
        this.listsService.addList(listName);
    }

    deleteList(list: IList): void {
        this.listsService.deleteList(list.id);
    }
}
