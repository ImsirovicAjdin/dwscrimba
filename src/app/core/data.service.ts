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

    // we getCustomer, we pass a customer id as a number, and we get back an Observable (a delayed response) - with an customer in it (sincle I have <ICustomer>)
    // so we can say 'return the observable, go get', in this case what we're expecting is to get back an array of customers, and we're gonna call customers.json, since we don't actually have
    // a way to run a restul api

    // in the pipe, what the map does, once the data starts flowing from the server down the pipeline, down the hose, then we can get to that response data... we know we are
    // getting an array of ICustomers, and what I'm gonna do here is, I'm gonna say: customers.filter
    // meaning: '(1) we received the customers here map(customers => ),
    // and lets: '(2) filter them (... = customers.filter ) based on where customer id equals the the id that was passed in to getCustomer(id: number)
    // so we're simply filtering that down to get our customer object
    // then we're gonna say, ok, IF we found a customer here (in let customer), and we have a customer length, then we're gonna grab customer[0] (because filter returns an array),
    // so we're saying in (3) 'if we have an array, and there's actually items in the array', then return the first item, otherwise we didn't find anything so just return null
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