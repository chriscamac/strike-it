import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LoginService } from 'src/app/users/login.service';

@Component({
    selector: 'app-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
    app = environment.app;
    repoUrl = environment.repoUrl;
    twitter = environment.twitter;

    loggedIn = false;
    username = '';

    constructor(private loginService: LoginService) {}

    ngOnInit() {
        this.loginService.loggedInUser.subscribe(user => {
            this.loggedIn = user ? true : false;
            this.username = (user && user.name) || '';
        });
    }
}
