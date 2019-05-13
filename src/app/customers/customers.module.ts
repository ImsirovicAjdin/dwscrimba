import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent ],
  imports: [
    CommonModule, 
    SharedModule,
    FormsModule,
    HttpClientModule,
    CustomersRoutingModule
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
