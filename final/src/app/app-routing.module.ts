import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'categories', loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule) },
   { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
