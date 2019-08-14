import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginService } from '../users/login.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
    app = environment.app;
    loggedIn = false;

    constructor(private loginService: LoginService) {}

    ngOnInit() {
        this.loginService.loggedInUser.subscribe(
            user => (this.loggedIn = user ? true : false)
        );
    }
}
