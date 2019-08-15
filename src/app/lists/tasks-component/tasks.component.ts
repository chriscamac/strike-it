import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
import { IList, ITask } from 'src/app/model/interfaces/lists';

@Component({
    selector: 'app-tasks',
    styleUrls: ['./tasks.component.scss'],
    templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
    selectedList: IList = null;

    constructor(private listsService: ListsService) {}

    ngOnInit(): void {
        this.listsService.selectedList.subscribe(selectedList => {
            this.selectedList = selectedList;
        });
    }

    toggleTaskDone(task: ITask): void {
        this.listsService.toggleTaskDone(task.id);
    }
}
