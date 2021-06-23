import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductoConsultaComponent } from './Proyecto/producto-consulta/producto-consulta.component';
import { CotizacionConsultaComponent } from './Proyecto/cotizacion-consulta/cotizacion-consulta.component';
import { ClienteConsultaComponent } from './Proyecto/cliente-consulta/cliente-consulta.component';
import { ProveedorConsultaComponent } from './Proyecto/proveedor-consulta/proveedor-consulta.component';
import { ProductoRegistroComponent } from './Proyecto/producto-registro/producto-registro.component';
import { CotizacionRegistroComponent } from './Proyecto/cotizacion-registro/cotizacion-registro.component';
import { ClienteRegistroComponent } from './Proyecto/cliente-registro/cliente-registro.component';
import { ProveedorRegistroComponent } from './Proyecto/proveedor-registro/proveedor-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { AlertModalComponent } from './proyecto/alert-modal/alert-modal.component';
import { LoginComponent } from './auth/login/login.component';
import { ClienteEditComponent } from './proyecto/cliente-edit/cliente-edit.component';
import { TarjetaProductoComponent } from './proyecto/tarjeta-producto/tarjeta-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FiltroProductosPipe } from './pipe/filtro-productos.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ProductoDetallesComponent } from './proyecto/producto-detalles/producto-detalles.component';
import { RegisterModuleComponent } from './auth/register-module/register-module.component';
import { AgregarCarritoComponent } from './carrito/agregar-carrito/agregar-carrito.component';
import { CotizacionModuleComponent } from './proyecto/cotizacion-module/cotizacion-module.component';
import { CarritoItemsComponent } from './carrito/carrito-items/carrito-items.component';
import { FiltroDetalleProductosPipe } from './pipe/filtro-detalle-productos.pipe';
import { FinalizarCotizacionComponent } from './carrito/finalizar-cotizacion/finalizar-cotizacion.component';
import { MisCotizacionesComponent } from './carrito/mis-cotizaciones/mis-cotizaciones.component';
import { FiltroMisCotizacionesPipe } from './pipe/filtro-mis-cotizaciones.pipe';
import { MisCotizacionesModalComponent } from './carrito/mis-cotizaciones-modal/mis-cotizaciones-modal.component';
import { DetallesMisCotizacionesComponent } from './carrito/detalles-mis-cotizaciones/detalles-mis-cotizaciones.component';
import { StockProductosComponent } from './proyecto/stock-productos/stock-productos.component';
import { StockProductosEditComponent } from './proyecto/stock-productos-edit/stock-productos-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductoConsultaComponent,
    CotizacionConsultaComponent,
    ClienteConsultaComponent,
    ProveedorConsultaComponent,
    ProductoRegistroComponent,
    CotizacionRegistroComponent,
    ClienteRegistroComponent,
    ProveedorRegistroComponent,
    AlertModalComponent,
    LoginComponent,
    ClienteEditComponent,
    TarjetaProductoComponent,
    FiltroProductosPipe,
    ProductoDetallesComponent,
    RegisterModuleComponent,
    AgregarCarritoComponent,
    CotizacionModuleComponent,
    CarritoItemsComponent,
    FiltroDetalleProductosPipe,
    FinalizarCotizacionComponent,
    MisCotizacionesComponent,
    FiltroMisCotizacionesPipe,
    MisCotizacionesModalComponent,
    DetallesMisCotizacionesComponent,
    StockProductosComponent,
    StockProductosEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatCarouselModule,
    MatAutocompleteModule,
    FlexLayoutModule,
      MatGridListModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
], { relativeLinkResolution: 'legacy' }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
