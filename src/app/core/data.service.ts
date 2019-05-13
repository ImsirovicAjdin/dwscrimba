import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/'; // we'll just call a json file, but we can just as easily call a url, just replace the string here
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
        // a call to getCustomers() will return an ICustomer array (<ICustomer[]), but it's an async operation so we don't know how long it will take
        // the Observable will allow us to return async data
        // Essentially, what it does is, it starts an operation, and then someone could say, 'Hey, I wanna subscribe to getting customers'
        // ... and when we return this observable they will subscribe to it, and once the data eventually comes back from the server, they'll then get it
        // ... then that subscription can kind of end and you can unsubscribe

        // we're gonna use this http client to actually call the server, get our customers json, and then return it to a component that's gonna subscribe by calling this customers function
        // so we're gonna return an observable, and this is gonna be done by calling this.http.get
        // get will allow us, optionally, to say 'Hey, what is the type of data you're expecting to get?'; Well, we want an ICustomer array:
            return this.http.get<ICustomer[]>
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