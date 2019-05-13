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
        // and now we'll just pass to .get the data source
        // now we could do that, but it's possible we might get an error. Maybe the server's down,
        // or the network's down, or something else could go haywire
            return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json');
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