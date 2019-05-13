import { Component, OnInit, Input } from '@angular/core';

import { ICustomer } from '../../shared/interfaces';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
    // instead, we'll use the property getters and setters technique, 
    // made available by ES2015
    private _customers: ICustomer[] = [];
    // I'm gonna add a get block here
    @Input() get customers(): ICustomer[] {
        return this._customers;
    }

    set customers(value: ICustomer[]) {
        if (value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders(); // this will iterate thru the customers and do sth with those
        }
    }

    filteredCustomers: any[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    constructor() {}

    ngOnInit() {
    }

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        })
    }   
    
    filter(data: string) {
        if (data) {
            this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
        } else {
            this.filteredCustomers = this.customers;
        }
        this.calculateOrders(); // Make it always recalculate the orders to avoid the calculate orders bug        
    }


    sort(prop: string) {
        // A sorter service will handle the sorting
    }

}

/*
An Angular service is a class that can be reused throughout an app
It acts as a "singleton" (A singleton is an object that is created one time in memory, while the application runs, and it can then be shared, or reused, in many different spots, throughout the application)
A service could be used in a component, it could be used in another service, etc.

A service is a very simple item to create in an Angular application, cuz it's nothing more than a class with a 
decorator:

// data.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	constructor() { }
	
	myServiceFunction() {
		// return data
	}
}

@Injectable means that this DataService class can have a constructor where other services might be injected, or in other words, passed into the constructor at runtime. This concept's called 'Dependency injection'.
*/