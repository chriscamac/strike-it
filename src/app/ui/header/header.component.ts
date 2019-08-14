import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    app = environment.app;
    repoUrl = environment.repoUrl;
    twitter = environment.twitter;

    constructor() {}

    ngOnInit() {}
}
