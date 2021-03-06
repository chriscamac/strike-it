import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ListsUIComponent } from './lists-ui.component';
import { ListsModule } from '../lists.module';

describe('ListsUiComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, ListsModule],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(ListsUIComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
