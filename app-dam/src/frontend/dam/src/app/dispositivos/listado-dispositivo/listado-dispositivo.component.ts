import { Component, Directive, OnInit } from '@angular/core';
import { Dispositivo } from 'src/app/interfaces/interfaces';
import { DispositivoService } from 'src/app/services/dispositivo.service';


/* interface Dispositivo {
  id: number,
  name: string,
  location: string,
} */

@Component({
  selector: 'app-listado-dispositivo',
  templateUrl: './listado-dispositivo.component.html',
  styleUrls: ['./listado-dispositivo.component.scss'],
})


export class ListadoDispositivoComponent  implements OnInit {

 public DetalleState: boolean = false
 listado:Dispositivo[]=[];
  
  constructor( private _dispositivoService: DispositivoService) { 
   

  }
  

  async ngOnInit() {
    await this._dispositivoService.getDispositivos()
      .then((dispositivos) => {

       /*  var listado: Dispositivo[] = dispositivos */
       this.listado = dispositivos;
        console.log(this.listado)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('Me ejecuto primero')
  }

  VerDetalle () {
   this.DetalleState = true
  }

  CerrarDetalle () {
    this.DetalleState = false
   }
 
}
