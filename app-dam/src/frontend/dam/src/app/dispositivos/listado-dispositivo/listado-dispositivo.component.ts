import { Component, Directive, OnInit } from '@angular/core';
import { Dispositivo } from '../../interfaces/interfaces';
import { DispositivoService } from '../../services/dispositivo.service';




@Component({
  selector: 'app-listado-dispositivo',
  templateUrl: './listado-dispositivo.component.html',
  styleUrls: ['./listado-dispositivo.component.scss'],
})


export class ListadoDispositivoComponent  implements OnInit {

 DetalleState: boolean = false
 listadoDispositivo:Dispositivo[]=[];
 dispositivoActualId:number = 1;
 
  
  constructor( private _dispositivoService: DispositivoService) { 
  }
  
  /* dispositivoActualId: number = 1; */

  ngOnInit() {
    this.obtenerDispositivos();
  }


  async obtenerDispositivos() {
    await this._dispositivoService.getDispositivos()
      .then((dispositivos) => {

       this.listadoDispositivo = dispositivos;
        console.log(this.listadoDispositivo)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  VerDetalle (dispositivoId:number) {
   this.dispositivoActualId = dispositivoId;
   this.DetalleState = true
  }

  CerrarDetalle () {
    this.DetalleState = false
   }
 
}
