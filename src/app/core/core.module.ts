import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    imports: [ ],
    providers: [ DataService, SorterService ]
    // provider goes hand-in-hand with an injector container
    // the injector container will contact the provider (the 'chef'), and say 'Hey, I need a data service instance'
    // it will pass it to the injector container, which will then store it as a singleton, and then the injector container will pass that into whoever requested the object
    // So I kind of think of the provider as the chef, the injector container as a waiter

})
export class CoreModule { }