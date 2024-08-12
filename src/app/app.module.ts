import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PointOfSellComponent } from './point-of-sell/point-of-sell.component';
import { CocinaComponent } from './cocina/cocina.component';
import { PuntoDeEntregaComponent } from './punto-de-entrega/punto-de-entrega.component';
import { RestauranteComponent } from './restaurante/restaurante.component';

@NgModule({
  declarations: [
    AppComponent,
    PointOfSellComponent,
    CocinaComponent,
    PuntoDeEntregaComponent,
    RestauranteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
