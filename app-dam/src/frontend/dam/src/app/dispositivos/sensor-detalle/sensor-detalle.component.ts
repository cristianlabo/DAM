// conectado al contenedor docker exec -it ionic-ui bash
// correr antes npm install --save highcharts
import { UltimaMedicionService } from '../../services/ultima-medicion.service';
import { MedicionesService } from '../../services/mediciones.service';
import { AperturaElectrovalvulaService } from '../../services/apertura-electrovalvula.service';
import { CierreElectrovalvulaService } from '../../services/cierre-electrovalvula.service'; 
import { Medicion } from '../../interfaces/interfaces';
import { LogRiegosService } from '../../services/log-riegos.service';
import { LogRiego } from '../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-sensor-detalle',
  templateUrl: './sensor-detalle.component.html',
  styleUrls: ['./sensor-detalle.component.scss'],
})

export class SensorDetalleComponent implements OnInit {

  @Input() dispositivoId: number =1;
  @Output() eventoHijo = new EventEmitter<string>();


  UltimaMedicion: Medicion = { medicionId: 1, fecha: new Date(), valor: "", dispositivoId: 1};


  DetalleElectrovalvula: boolean = false;

  listadoMediciones: Medicion[] =[];
  DetalleMedicion: boolean = false;
  

  listadoLogRiegos: LogRiego[] =[];
  DetalleLogRiegos: boolean = false;

   constructor(private _medicionesService: MedicionesService,private _logRiegosService: LogRiegosService,private _UltimaMedicionService: UltimaMedicionService,private _AperturaElectrovalvulaService:AperturaElectrovalvulaService, private _CierreElectrovalvulaService:CierreElectrovalvulaService) { 
   }
 
  async ngOnInit() {
    await this.obtenerUltimaMedicion(this.dispositivoId);
  }

  enviarPadre() {
    
    this.eventoHijo.emit(this.UltimaMedicion.valor)
  }
 

  async obtenerUltimaMedicion(dispositivoId:number){

    await this._UltimaMedicionService.getUltimaMedicion(dispositivoId)
    .then((medicion) => {

      console.log("entro a ultima medicion")
     this.UltimaMedicion = medicion[0];
      console.log(this.UltimaMedicion)
    })
    .catch((error) => {
      console.log(error)
    })

  }

  async postAbrirElectrovalvula(dispositivoId:number){

    await this._AperturaElectrovalvulaService.postAperturaElectrovalvula(dispositivoId)
    .then((respuesta) => {


      console.log("entro a post apertura electrovalvula")
      console.log(respuesta)
      /* location.reload(); */
    })
    .catch((error) => {
      console.log(error)
    })

  }

  async postCerrarElectrovalvula(dispositivoId:number){

    await this._CierreElectrovalvulaService.postCierreElectrovalvula(dispositivoId)
    .then((respuesta) => {

      console.log("entro a post cerrar electrovalvula")
      console.log(respuesta)
    })
    .catch((error) => {
      console.log(error)
    })

  }


  async abrirElectrovalvula(){

    await this.postAbrirElectrovalvula(this.dispositivoId);
    await this.obtenerLogRiegos(this.dispositivoId);
    this.DetalleElectrovalvula = true;

  }

  async CerrarDetalleElectrovalvula(){
    await this.postCerrarElectrovalvula(this.dispositivoId);
    await this.obtenerUltimaMedicion(this.dispositivoId);
    await this.obtenerMediciones(this.dispositivoId);
    await this.obtenerLogRiegos(this.dispositivoId);
    this.enviarPadre();
    this.DetalleElectrovalvula = false;
  }



  async obtenerMediciones(dispositivoId:number){

    await this._medicionesService.getMediciones(dispositivoId)
    .then((mediciones) => {

      console.log("entro a mediciones")
     this.listadoMediciones = mediciones;
      console.log(this.listadoMediciones)
    })
    .catch((error) => {
      console.log(error)
    })

  }

  abrirDetalleMedicion(){

    this.obtenerMediciones(this.dispositivoId);
    this.DetalleMedicion = true;

  }

  CerrarDetalleMedicion(){
    this.DetalleMedicion = false;
  }


  async obtenerLogRiegos(dispositivoId:number){

    await this._logRiegosService.getLogRiegos(dispositivoId)
    .then((LogRiegos) => {

      console.log("entro a log riegos")
     this.listadoLogRiegos = LogRiegos;
      console.log(this.listadoLogRiegos)
    })
    .catch((error) => {
      console.log(error)
    })

  }


  abrirDetalleLogRiegos(){

    this.obtenerLogRiegos(this.dispositivoId);
    this.DetalleLogRiegos = true;

    console.log("Entra a log de riegos");

  }

  CerrarDetalleLogRiegos(){

    
    this.DetalleLogRiegos = false;

  }
 
   
 }
