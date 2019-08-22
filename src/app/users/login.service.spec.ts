import { TestBed, async } from '@angular/core/testing';
import { LoginService } from './login.service';
import { IUserLoginObject, IUser } from '../model/interfaces/users';

describe('AppComponent', () => {
    let loginService: LoginService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [LoginService],
        });
        loginService = TestBed.get(LoginService);
    }));

    describe('login method', () => {
        beforeEach(() => {
            loginService.logout();
        });

        it('should return true when given a valid login object', () => {
            let loginReturnValue: boolean;
            const loginObject: IUserLoginObject = {
                name: 'test',
                password: 'test',
            };
            loginService.login(loginObject).subscribe(value => (loginReturnValue = value));
            expect(loginReturnValue).toBe(true);
        });

        it('should return false when not given a valid login object', () => {
            let loginReturnValue: boolean;
            loginService.login(null).subscribe(value => (loginReturnValue = value));
            expect(loginReturnValue).toBe(false);
        });

        it('should set loggedInUser when given a valid login object', () => {
            let loggedInUser: IUser;
            const loginObject: IUserLoginObject = {
                name: 'test',
                password: 'test',
            };
            loginService.loggedInUser.subscribe(value => (loggedInUser = value));
            expect(loggedInUser).toBeNull();
            loginService.login(loginObject).subscribe();
            expect(loggedInUser.name).toBe('test');
        });

        it('should set currentLoggedInUserId when given a valid login object', () => {
            let loggedInUserId: number;
            const loginObject: IUserLoginObject = {
                name: 'test',
                password: 'test',
            };
            loggedInUserId = loginService.currentLoggedInUserId;
            expect(loggedInUserId).toBeNull();
            loginService.login(loginObject).subscribe();
            loggedInUserId = loginService.currentLoggedInUserId;
            expect(loggedInUserId).toBe(1);
        });
    });
});
