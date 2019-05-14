import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdersComponent } from './orders.component';

// Routes can be used to hook a specific URL to a component
// Components can be loaded into a <router-outlet></router-outlet>
const routes: Routes = [
    // we're using route params here:
    { path: 'orders/:id', component: OrdersComponent } // (1) the OrdersComponent needs to GRAB this :id

];

@NgModule({
    imports: [ RouterModule.forChild(routes) ], 
    exports: [ RouterModule ]
})
export class OrdersRoutingModule {

}