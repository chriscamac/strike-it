import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListsUIComponent } from './lists-ui-component/lists-ui.component';

const routes: Routes = [
    {
        path: 'lists',
        component: ListsUIComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ListsRoutingModule {}
