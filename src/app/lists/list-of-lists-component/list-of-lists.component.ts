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

    constructor(private listsService: ListsService) {}

    ngOnInit(): void {
        this.listsService.lists.subscribe(lists => {
            this.lists = lists;
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
}
