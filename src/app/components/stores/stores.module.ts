 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [StoresComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class StoresModule { }
