import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: '**',
        component: WelcomeComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
