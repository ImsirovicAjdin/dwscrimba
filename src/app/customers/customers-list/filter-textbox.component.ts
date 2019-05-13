import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
        <!-- this [(ngM)] will automatically with the square brackets update the value of the input and with parentheses it will raise an event up that will update the filter -->
        Filter: <input type="text" [(ngModel)]="filter" />
    `
})
export class FilterTextboxComponent implements OnInit {

    
    private _filter: string;
    // @Input allows us to pass data in (below), and update the variable (above)
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val; // this is where the filter variable is set
        this.changed.emit(this.filter); //Raise changed event when the value changes
    }

    // what is this changed from line above? It is defined here, it is of type EventEmitter
    // EventEmitter is a way, in Angular, from a child to send data up to a parent
    // <string> is a TS generic, it's a way to have a code template, if I wanted to send <ICustomer>, I could, but now we're just gonna send a string
    // we're gonna assign the @Output property `changed` to a new instance of EventEmitter of <string>
    @Output() changed: EventEmitter<string> = new EventEmitter<string>();

    // so, in the code above, we're just notifying the parent what the user types so they can do the filtering
    constructor() {}

    ngOnInit() {

    }
}