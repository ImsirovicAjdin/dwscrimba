import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// you never import BrowserModule more than once in your app!
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [ CustomersComponent ],
  imports: [ CommonModule ]
})
export class CustomersModule { }
