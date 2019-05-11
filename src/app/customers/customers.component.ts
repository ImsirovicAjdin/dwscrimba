import { Component } from '@angular/core';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];

    constructor() {}

    ngOnInit() {
        this.title = 'Customers';
    }
}