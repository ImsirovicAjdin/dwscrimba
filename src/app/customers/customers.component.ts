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
            .subscribe((customers: ICustomer[]) => this.people = customers);
    }

}