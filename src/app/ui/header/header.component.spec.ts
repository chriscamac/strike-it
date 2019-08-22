import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { HeaderComponent } from './header.component';
import { UiModule } from '../ui.module';
import { IUser } from '../../model/interfaces/users';
import { LoginService } from '../../users/login.service';
import { Router } from '@angular/router';

export class MockLoginService {
    loggedInUser: Observable<IUser> = of({ id: 1, name: 'test' });
    logout() {
        return of(true);
    }
}

describe('ListsUiComponent', () => {
    let component: HeaderComponent;
    let loginService: LoginService;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, UiModule],
            providers: [
                {
                    provide: LoginService,
                    useClass: MockLoginService,
                },
            ],
        }).compileComponents();
        const fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.componentInstance;
        loginService = TestBed.get(LoginService);
        router = TestBed.get(Router);
    }));

    describe('ngOnInit', () => {
        it('should set loggedIn and userName', () => {
            component.ngOnInit();
            expect(component.loggedIn).toBe(true);
            expect(component.username).toBe('test');
        });
    });

    describe('logout', () => {
        it('should call loginService logout and router navigateByUrl', () => {
            spyOn(loginService, 'logout').and.callThrough();
            spyOn(router, 'navigateByUrl').and.returnValue(null);
            component.logout();
            expect(loginService.logout).toHaveBeenCalled();
            expect(router.navigateByUrl).toHaveBeenCalled();
        });
    });
});
