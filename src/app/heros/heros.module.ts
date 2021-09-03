import { NgModule } from '@angular/core';
// modulos
import { CommonModule } from '@angular/common';
import { HerosRoutingModule } from './heros-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
// flez layout
import { FlexLayoutModule } from '@angular/flex-layout';
// componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
