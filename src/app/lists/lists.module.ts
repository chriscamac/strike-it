import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsUIComponent } from './lists-ui-component/lists-ui.component';
import { ListsComponent } from './lists-component/lists.component';
import { TasksComponent } from './tasks-component/tasks.component';
import { AddComponent } from './add-component/add.component';

@NgModule({
    declarations: [ListsComponent, ListsUIComponent, TasksComponent, AddComponent],
    imports: [CommonModule, ReactiveFormsModule, ListsRoutingModule],
})
export class ListsModule {}
