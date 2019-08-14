import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

    constructor() {}

    ngOnInit() {
        this.usernameField.nativeElement.focus();
    }
}
