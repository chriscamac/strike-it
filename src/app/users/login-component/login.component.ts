import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';
import { IUserLoginObject } from '../../model/interfaces/users';

@Component({
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    @ViewChild('username', null) usernameField: ElementRef;

    loginForm = new FormGroup({
        name: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit() {
        this.usernameField.nativeElement.focus();
    }

    login() {
        if (!this.loginForm.valid) {
            // TODO CCC: pop toast
            return;
        }

        const loginFormValues = this.loginForm.value;
        const loginObject: IUserLoginObject = {
            name: loginFormValues.name,
            password: loginFormValues.password,
        };

        this.loginService.login(loginObject).subscribe(success => {
            if (success) {
                this.router.navigateByUrl('/lists');
            } else {
                // TODO CCC: pop toast
            }
        });
    }
}
