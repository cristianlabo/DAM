import { Component, Directive, OnInit } from '@angular/core';
import { Dispositivo } from 'src/app/interfaces/interfaces';
import { DispositivoService } from 'src/app/services/dispositivo.service';



@Component({
  selector: 'app-listado-dispositivo',
  templateUrl: './listado-dispositivo.component.html',
  styleUrls: ['./listado-dispositivo.component.scss'],
})


export class ListadoDispositivoComponent  implements OnInit {

 public DetalleState: boolean = false
 listadoDispositivo:Dispositivo[]=[];
  
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

  VerDetalle () {
   this.DetalleState = true
  }

  CerrarDetalle () {
    this.DetalleState = false
   }
 
}
