import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  // (2) to do this we're gonna inject the dataservice and the activated route
  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { } // (3) what's an activated route?

  ngOnInit() {
    // we get the id using a "PARAM MAP"
    // let id = this.route; // this gets us to the activated route
    // let id = this.route.paramMap; // I could do '.paramMap', and we could subscribe to the parameters that are in the URL
                                     // but we don't need that in this case, cuz as the URL loads, we only need to grab that param one time, and the id is not really gonna be changing from there
                                     // you use paramMap if the component stays visible on the screen while the url changes
                                     // but we only need to use it once, so we'll use what's called a snapshot
                                     // snapshot is like grabbing a picture, if a url changes that picture doesn't just automatically update
    // let id = this.route.snapshot.paramMap.get('id'); // this is gonna get it as a string, and we need an int, so:
    let id = +this.route.snapshot.paramMap.get('id');

    this.dataService.getOrders(id).subscribe((orders: IOrder[]) => {
      // we'll update the orders array from ln 14 which starts off as an empty array:
      this.orders = orders;
    });



    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

}