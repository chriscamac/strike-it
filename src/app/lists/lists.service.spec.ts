import { TestBed, async } from '@angular/core/testing';

import { ListsService } from './lists.service';
import { IUserLoginObject, IUser } from '../model/interfaces/users';
import { mockLists } from '../mock-data/lists.mock';
import { IList } from '../model/interfaces/lists';

describe('AppComponent', () => {
    let listsService: ListsService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [ListsService],
        });
        listsService = TestBed.get(ListsService);
        listsService.init();
    }));

    describe('setSelectedList method', () => {
        it('should set the selectedList using the id passed in', () => {
            const idToSet = 2;
            listsService.setSelectedList(idToSet);
            let selectedList: IList;
            listsService.selectedList.subscribe(list => (selectedList = list));
            expect(selectedList.id).toBe(idToSet);
        });
    });

    describe('toggleTaskDone method', () => {
        it('should toggle the done flag for the selectedList using the id passed in', () => {
            let selectedList: IList;
            listsService.selectedList.subscribe(list => (selectedList = list));
            const taskIdToToggle = selectedList.tasks[0].id;
            const doneInitialValue = selectedList.tasks[0].done;
            listsService.toggleTaskDone(taskIdToToggle);
            const doneValueAfter = selectedList.tasks[0].done;
            expect(doneValueAfter).toBe(!doneInitialValue);
        });
    });

    describe('addList method', () => {
        it('should add a list using the name passed in', () => {
            let lists: IList[];
            listsService.lists.subscribe(allLists => (lists = allLists));
            let listsCount = lists.length;
            expect(listsCount).toBe(2);
            listsService.addList('test');
            listsCount = lists.length;
            expect(listsCount).toBe(3);
        });
    });
});
