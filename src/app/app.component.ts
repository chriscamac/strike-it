import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    constructor(titleService: Title) {
        titleService.setTitle(environment.app.name);
    }
}
