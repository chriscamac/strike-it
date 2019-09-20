import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { IList } from 'src/app/model/interfaces/lists';
import { environment } from 'src/environments/environment';

import Swal, { SweetAlertOptions } from 'sweetalert2';

@Component({
    selector: 'app-lists',
    styleUrls: ['./lists.component.scss'],
    templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
    lists: IList[] = [];
    selectedListId = 0;

    get hasLists(): boolean {
        return this.lists && this.lists.length ? true : false;
    }

    constructor(private listsService: ListsService) {}

    ngOnInit(): void {
        this.listsService.lists.subscribe(lists => {
            this.lists = lists || [];
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
        const swalConfig: SweetAlertOptions = {
            title: 'please confirm',
            text: `no take backs!`,
            showCancelButton: true,
            confirmButtonColor: environment.colors.primary,
            confirmButtonText: 'Yes',
            type: null,
        };
        Swal.fire(swalConfig).then(confirmResult => {
            if (confirmResult && confirmResult.value === true) {
                this.listsService.deleteList(list.id);
            }
        });
    }
}
