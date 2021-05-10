 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeProductsComponent } from './home-products.component';


const routes: Routes = [
  {
    path: '',
    component: HomeProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeProductsRoutingModule { }
