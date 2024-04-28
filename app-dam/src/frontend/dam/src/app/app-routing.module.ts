import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'detalle-sensor',
    loadChildren: () => import('../app/dispositivos/detalle-sensor/detalle-sensor.module').then( m => m.DetalleSensorPageModule),
  },
  {
    path: '',
    redirectTo: 'dispositivos',
    pathMatch: 'full'
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
