import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
    app = environment.app;

    constructor() {}

    ngOnInit() {}
}
