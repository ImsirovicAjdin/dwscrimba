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

    /*
    Remember the injection concept; back in the DataService we had an injectable, and that made it so that we can inject the HttpClient (which is a singleton) into constructor, dynamically
    Now, the @Component decorator also allows it's constructor to be injectable, so I can do private dataService: DataService
    At runtime, when CustomersComponent loads, DataService will be automatically created by the provider, injected into the constructor below, and now we'll have a private property called
    dataService
    And that's how we can inject this DataService into any component or even another service if you wanted to
    */
    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.title = 'Customers Test';
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