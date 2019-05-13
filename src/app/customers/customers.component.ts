import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {

    title: string;
    people: ICustomer[];
    isVisible = true;

    changeVisibility() {
        this.isVisible = !this.isVisible;
    }

    constructor() {}

    ngOnInit() {
        this.title = 'Customers Test';

        this.people = [
            {
                id: 1, 
                name: 'John Doe', 
                city: 'Phoenix', 
                orderTotal: 9.99, 
                customerSince: new Date(2014, 7, 10) 
            },
            {
                id: 2, 
                name: 'Jane Doe', 
                city: 'Chandler', 
                orderTotal: 9.99, 
                customerSince: new Date(2017, 2, 22) 
            },
            {
                id: 3, 
                name: 'Michelle Thomas', 
                city: 'Seattle', 
                orderTotal: 9.99, 
                customerSince: new Date(2004, 10, 31) 
            },
            {
                id: 4, 
                name: 'Jim Thomas', 
                city: 'New York', 
                orderTotal: 9.99, 
                customerSince: new Date(2014, 10, 10) 
            },                        
        ]
    }

}