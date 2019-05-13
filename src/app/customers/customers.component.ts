import { Component, OnInit } from '@angular/core';

import { ICustomer } from '../shared/interfaces';
import { DataService } from '../core/data.service';

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

    constructor(private dataService: DataService) {
        // Now we want to use the injected DataService to actually call into the getCustomers function, and then subscribe to this Observable in the getCustomers function, to get back this customers data
        // and we'll do that in (1) here:
    }

    ngOnInit() {
        this.title = 'Customers Test';
        // This: this.dataService.getCustomers();  ...returns an observable, so we can't do this:
        // this.people = this.dataService.getCustomers();
        // instead, what we have to do, is tell the getCustomers to go to the server and get the data:
        // this.dataService.getCustomers(); // and that's because getCustomers will get what's called a "cold observable" - a cold observable is the one that's ready to go, but you have to turn it on, otherwise it just sits there dormant and doesn't do anything

        this.dataService.getCustomers()
            .subscribe(); // of course, with the code like this, we would have no way to get the data back
        /*
        this.people = [
            {
                id: 1, 
                name: 'john doe', 
                city: 'Phoenix', 
                orderTotal: 9.99, 
                customerSince: new Date(2014, 7, 10) 
            },
            {
                id: 2, 
                name: 'jane doe', 
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
        */
    }

}