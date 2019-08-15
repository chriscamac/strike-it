import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
    selector: 'app-lists-add',
    styleUrls: ['./add.component.scss'],
    templateUrl: './add.component.html',
})
export class ListsAddComponent implements OnInit {
    @Input() placeholder = 'add item';
    @Output() added = new EventEmitter<string>();
    @ViewChild('addItemInput', null) addItemInput: ElementRef;

    addText = '';

    constructor() {}

    ngOnInit(): void {
    }

    addItem(): void {
        this.added.next(this.addText);
        this.addText = '';
        this.addItemInput.nativeElement.focus();
    }
}
