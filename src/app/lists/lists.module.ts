import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists-component/lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { ListOfListsComponent } from './list-of-lists-component/list-of-lists.component';
import { TasksComponent } from './tasks-component/tasks.component';

@NgModule({
    declarations: [ListsComponent, ListOfListsComponent, TasksComponent],
    imports: [CommonModule, ListsRoutingModule],
})
export class ListsModule {}
