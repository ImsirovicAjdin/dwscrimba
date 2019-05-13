import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/'; // we'll just call a json file, but we can just as easily call a url, just replace the string here
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
            return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
            .pipe(
                catchError(this.handleError)
            );
    }

    // ... that's what the map does; as the data flows in, if there's customers in that data flowing through, the map  will map the customers
    // into this callback function right here, and then it will return the actual customer (that obeys the <ICustomer> contract),
    // and then we put a comma for another operator, and then we put a catchError 'filter', so if there was an error in the data flow, we can deal with that
    getCustomer(id: number) : Observable<ICustomer> {
        return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
          .pipe(
            map(customers => {
              let customer = customers.filter((cust: ICustomer) => cust.id === id);
              return (customer && customer.length) ? customer[0] : null; // (3)
            }),
            catchError(this.handleError)
          )
      }
 
      // in getOrders, we take the customer id, and we grab the orders json (satisfying the <IOrder[]> contract),
      // pipe that data into the map operator, that gives us back an array of IOrder members,
      // and again, we're gonna filter those based on the order.customerId, so if I pass in customer id of 5,
      // like this: getOrders(5), we know that we only want to grab order.customerId === 5
      // and then we're gonna return those

      // Now what map does in both getCustomer and getOrders, whatever gets returned from the map, that's what the caller gets
      // So in other words, they will not get the original <IOrder[]> array that we received
      // here: -----------------------------|vvv|
      // we'll return the filtered custOrders, and that's actually what the caller will get (whoever subscribes to this)
      // and that's the way that map function works
      getOrders(id: number) : Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
          .pipe(
            map(orders => {
              let custOrders = orders.filter((order: IOrder) => order.customerId === id);
              return custOrders;
            }),
            catchError(this.handleError)
          );
      }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}