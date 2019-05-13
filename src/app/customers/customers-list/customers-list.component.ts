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
            this.calculateOrders();
        } else {
            this.filteredCustomers = this.customers;
        }
    }


    sort(prop: string) {
        // A sorter service will handle the sorting
    }

}