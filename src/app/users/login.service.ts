import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { IUser, IUserLoginObject } from '../model/interfaces/users';

@Injectable({ providedIn: 'root' })
export class LoginService {
    private readonly _loggedInUser: BehaviorSubject<
        IUser
    > = new BehaviorSubject(null);
    loggedInUser = this._loggedInUser.asObservable();

    constructor() {}

    login(loginObject: IUserLoginObject): Observable<boolean> {
        if (!loginObject || !loginObject.name || !loginObject.password) {
            return of(false);
        }

        // TODO CCC: implement API
        // spoofing login
        this._loggedInUser.next({
            id: 1,
            name: loginObject.name,
        });
        return of(true);
    }

    logout(loginObject: IUserLoginObject): Observable<void> {
        // TODO CCC: implement API
        // spoofing logout
        this._loggedInUser.next(null);
        return of();
    }
}
