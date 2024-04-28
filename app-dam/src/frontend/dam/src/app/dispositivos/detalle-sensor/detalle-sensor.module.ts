import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleSensorPageRoutingModule } from './detalle-sensor-routing.module';
import { DetalleSensorPage } from './detalle-sensor.page';
import { DispositivosPageModule } from '../dispositivos.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSensorPageRoutingModule,
    DispositivosPageModule,
  ],
  exports: [DetalleSensorPage],
  declarations: [DetalleSensorPage]
})
export class DetalleSensorPageModule {}
