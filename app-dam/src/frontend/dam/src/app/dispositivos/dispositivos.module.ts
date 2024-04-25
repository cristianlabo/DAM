import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivosPageRoutingModule } from './dispositivos-routing.module';

import { DispositivosPage } from './dispositivos.page';
import { ListadoDispositivoComponent } from './listado-dispositivo/listado-dispositivo.component';
import { SensorDetalleComponent } from './sensor-detalle/sensor-detalle.component';
import { ColorearDirective } from 'src/app/directivas/colorear.directive';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivosPageRoutingModule
    
  ],
  declarations: [DispositivosPage,ListadoDispositivoComponent,SensorDetalleComponent,ColorearDirective]
})
export class DispositivosPageModule {}
