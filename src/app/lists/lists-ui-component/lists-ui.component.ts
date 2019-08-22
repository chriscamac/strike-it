import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/users/login.service';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./lists-ui.component.scss'],
    templateUrl: './lists-ui.component.html',
})
export class ListsUIComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
        if (!this.loginService.currentLoggedInUserId) {
            this.router.navigateByUrl('/login');
        }
    }
}
