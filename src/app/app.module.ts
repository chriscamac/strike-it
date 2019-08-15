import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { UiModule } from './ui/ui.module';
import { UsersModule } from './users/users.module';
import { ListsModule } from './lists/lists.module';

@NgModule({
    declarations: [AppComponent, WelcomeComponent, AboutComponent],
    imports: [
        BrowserModule,
        UiModule,
        UsersModule,
        ListsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
