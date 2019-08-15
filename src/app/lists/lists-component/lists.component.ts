import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/users/login.service';
import { Router } from '@angular/router';

@Component({
    styleUrls: ['./lists.component.scss'],
    templateUrl: './lists.component.html',
})
export class ListsComponent implements OnInit {
    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit(): void {
        if (!this.loginService.currentLoggedInUserId) {
            this.router.navigateByUrl('/login');
        }
    }
}
