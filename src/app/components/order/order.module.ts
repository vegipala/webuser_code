 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [OrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MDBBootstrapModule.forRoot(),
  ]
})
export class OrderModule { }
