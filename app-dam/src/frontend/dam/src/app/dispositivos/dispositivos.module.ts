import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispositivosPageRoutingModule } from './dispositivos-routing.module';

import { DispositivosPage } from './dispositivos.page';
import { ListadoDispositivoComponent } from './listado-dispositivo/listado-dispositivo.component';
import { SensorDetalleComponent } from './sensor-detalle/sensor-detalle.component';
import { ColorearDirective } from '../directivas/colorear.directive';
import { FechaPipePipe } from '../pipe/fecha-pipe.pipe';



@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispositivosPageRoutingModule
    
  ],
  declarations: [DispositivosPage,ListadoDispositivoComponent,SensorDetalleComponent,ColorearDirective ,FechaPipePipe ]
})
export class DispositivosPageModule {}
