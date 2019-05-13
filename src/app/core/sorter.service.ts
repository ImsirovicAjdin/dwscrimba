import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {
    // the SorterService doesn't even have a constructor but we're still sticking with the recommendation from the official docs

	property: string = null;
	direction: number = 1;

    // you can call the sort() function, pass in the collection that you wanna sort, then pass in the property that you wanna sort the collection by; it even supports nested properties,
    // where you could have like customer.address.city, and sort by that nested city property if you want

    // sort takes the collection you wanna sort, and the property you wanna sort by, so maybe you wanna sort by the city, or the name, or the ordder total
    sort(collection: any[], prop: any) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;

        collection.sort((a: any,b: any) => {
            let aVal: any;
            let bVal: any;
            
            //Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
              aVal = this.resolveProperty(prop, a);
              bVal = this.resolveProperty(prop, b);
            }
            else {            
              aVal = a[prop];
              bVal = b[prop];
            }
            
            //Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (this.isString(aVal)) aVal = aVal.trim().toUpperCase();
            if (this.isString(bVal)) bVal = bVal.trim().toUpperCase();
          
            if(aVal === bVal){
                return 0;
            }
            else if (aVal > bVal){
                return this.direction * -1;
            }
            else {
                return this.direction * 1;
            }
        });
    }
    
    isString(val: any) : boolean {
      return (val && (typeof val === 'string' || val instanceof String));
    }

    resolveProperty(path: string, obj: any) {
      return path.split('.').reduce(function(prev, curr) {
          return (prev ? prev[curr] : undefined)
      }, obj || self)
    }

}