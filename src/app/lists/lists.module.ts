import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsComponent } from './lists-component/lists.component';
import { ListsRoutingModule } from './lists-routing.module';
import { ListOfListsComponent } from './list-of-lists-component/list-of-lists.component';
import { TasksComponent } from './tasks-component/tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListsAddComponent } from './add-component/add.component';

@NgModule({
    declarations: [ListsComponent, ListOfListsComponent, TasksComponent, ListsAddComponent],
    imports: [CommonModule, ReactiveFormsModule, ListsRoutingModule],
})
export class ListsModule {}
