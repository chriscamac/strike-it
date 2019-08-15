import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-lists-add',
    styleUrls: ['./add.component.scss'],
    templateUrl: './add.component.html',
})
export class ListsAddComponent implements OnInit {
    @Input() disabled = false;
    @Input() placeholder = 'add item';
    @Output() added = new EventEmitter<string>();
    @ViewChild('addItemInput', null) addItemInput: ElementRef;

    addItemForm = new FormGroup({
        item: new FormControl(''),
    });

    get hasText(): boolean {
        return this.addItemForm.value.item ? true : false;
    }

    constructor() {}

    ngOnInit(): void {}

    addItem(): void {
        const itemName = this.addItemForm.value.item;
        if (!itemName) {
            return;
        }
        this.added.next(itemName);
        this.addItemForm.reset();
        this.addItemInput.nativeElement.focus();
    }
}
