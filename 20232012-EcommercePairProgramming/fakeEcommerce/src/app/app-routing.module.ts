import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//componentes
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { path: '', redirectTo: 'all-products', pathMatch: 'full' },
  {
    path: "all-products",
    children: [
      { path: '', component: ProductosComponent },
      { path: ':titulo/:precio-min/:precio-max', component: ProductosComponent },
      // { path: 'titulo/:titulo', component: ProductosComponent },
      // { path: 'precio/:precio', component: ProductosComponent },
      //
      //localhost:4200/all-products/zapa/100/0
      { path: 'product-detail/:id', component: ProductoDetalleComponent },

    ]
  },
  { path: "categorias/:id", component: CategoriasComponent },
  { path: "carrito", component: CarritoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* 
const routes: Routes = [
  {
    path:'balance', component: BalanceComponent
  },{
    path:'deposit', 
    component: DepositComponent,
    children: [
      {
        path:'coins', component: DepositaComponent
      },
      {
        path:'notes', component: DepositbComponent
      }
    ]
  },{
    path:'withdraw', component:WithdrawComponent
  }
]; 
this.route.navigate(['/', 'productos'])


*/