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

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.title = 'Customers Test';

        this.dataService.getCustomers()
            .subscribe((customers: ICustomer[]) => this.people = customers); // we wanna get back data, and we wanna get back customers, which we're gonna assign to the people property
                                //  so we're gonna pass those (customers: ICustomer[]) that this subscribe gives to us, and we assign it to the this.people property
        // So as a quick review,  the dataService has a getCustomers(), and it returns an observable. An observable is basically an async operation, saying "I'm gonna get to the data, but it might be a couple of seconds, 
        // it might be a second, we don't know - it depends on the network and a bunch of other factors"
        // we're then gonna take that observable, and subscribe to it; that allows us to get the customers: ICustomer[] data, EVENTUALLY, from the async operation;
        // and then we're gonna go ahead and assign this customers data to this.people: ... => this.people = customers
        // Now if everything is working properly, and we have the providers for the service and our modules are setup right, and our data service works, then now when we refresh we should get some data here
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