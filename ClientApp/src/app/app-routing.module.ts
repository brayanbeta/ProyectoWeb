import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductoRegistroComponent } from './Proyecto/producto-registro/producto-registro.component';
import { ProductoConsultaComponent } from './Proyecto/producto-consulta/producto-consulta.component';
import { CotizacionRegistroComponent } from './Proyecto/cotizacion-registro/cotizacion-registro.component';
import { CotizacionConsultaComponent } from './Proyecto/cotizacion-consulta/cotizacion-consulta.component';
import { ClienteConsultaComponent } from './Proyecto/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './Proyecto/cliente-registro/cliente-registro.component';
import { ProveedorConsultaComponent } from './Proyecto/proveedor-consulta/proveedor-consulta.component';
import { ProveedorRegistroComponent } from './Proyecto/proveedor-registro/proveedor-registro.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { ClienteEditComponent } from './Proyecto/cliente-edit/cliente-edit.component';
import { TarjetaProductoComponent } from './proyecto/tarjeta-producto/tarjeta-producto.component';
import { ProductoDetallesComponent } from './proyecto/producto-detalles/producto-detalles.component';
import { FinalizarCotizacionComponent } from './carrito/finalizar-cotizacion/finalizar-cotizacion.component';
import { MisCotizacionesComponent } from './carrito/mis-cotizaciones/mis-cotizaciones.component';
import { DetallesMisCotizacionesComponent } from './carrito/detalles-mis-cotizaciones/detalles-mis-cotizaciones.component';
import { StockProductosComponent } from './proyecto/stock-productos/stock-productos.component';
import { StockProductosEditComponent } from './proyecto/stock-productos-edit/stock-productos-edit.component';



const routes: Routes = [
  {path:'',redirectTo:'/logear',pathMatch:'full'},
  {
    path:'logear',
    component:LoginComponent
  },
  {
    path: 'consultarProductos',
    component: StockProductosComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },
  {
    path: 'consultarProductosStock/:id',
    component: StockProductosEditComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },
  {
    path: 'productoConsulta',
    component: ProductoConsultaComponent,
  },
  {
    path: 'finalizarCotizacion/:id',
    component: FinalizarCotizacionComponent,canActivate:[AuthGuard]
  },
  {
    path: 'misCotizaciones',
    component: MisCotizacionesComponent,canActivate:[AuthGuard]
  },
  {
    path: 'misCotizacionesDetalles/:id',
    component: DetallesMisCotizacionesComponent,canActivate:[AuthGuard]
  },
  {
    path: 'productoRegistro',
    component: ProductoRegistroComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },
  {
    path: 'productoDetalle/:id',
    component: ProductoDetallesComponent,canActivate:[AuthGuard]
  },
  {
    path: 'cotizacionConsulta/:id',
    component: CotizacionConsultaComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'cotizacionRegistro',
    component: CotizacionRegistroComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },

  {
    path: 'clienteConsulta',
    component: ClienteConsultaComponent,canActivate:[AuthGuard]
  },

  {
    path: 'clienteRegistro',
    component: ClienteRegistroComponent,canActivate:[AuthGuard]
  },

  {
    path: 'proveedorConsulta',
    component: ProveedorConsultaComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },
  {
    path: 'editarcliente/:id',
    component: ClienteEditComponent,canActivate:[AuthGuard]
  },
  {
    path: 'proveedorRegistro',
    component: ProveedorRegistroComponent,canActivate:[AuthGuard],data: { role: 'ADMINISTRADOR' }
  },
  {
    path: 'home',
    component: HomeComponent,canActivate:[AuthGuard]
  },
  {
    path: 'tarjetaProductos',
    component: TarjetaProductoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })

  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
