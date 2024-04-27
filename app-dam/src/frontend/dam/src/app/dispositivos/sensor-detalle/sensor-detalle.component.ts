// conectado al contenedor docker exec -it ionic-ui bash
// correr antes npm install --save highcharts
import { MedicionesService } from 'src/app/services/mediciones.service';
import { Medicion } from 'src/app/interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-sensor-detalle',
  templateUrl: './sensor-detalle.component.html',
  styleUrls: ['./sensor-detalle.component.scss'],
})

export class SensorDetalleComponent implements OnInit {

  listadoMediciones: Medicion[] =[];
  public DetalleMedicion: boolean = false

   constructor(private _medicionesService: MedicionesService) { 
   }
 
  ngOnInit() {
    this.postear(2)
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

  
  async postear(dispositivoId:number){

    await this._medicionesService.postMediciones(dispositivoId)
    .then((mediciones) => {

      console.log("entro a post")
     
    })
    .catch((error) => {
      console.log(error)
    })

  }
  


/*   listarMediciones(){

    

  } */

  abrirDetalleMedicion(){

    this.obtenerMediciones(2);
    this.DetalleMedicion = true;

  }

  CerrarDetalleMedicion(){
    this.DetalleMedicion = false;
  }
 
   
 
 }
/* export class SensorDetalleComponent implements OnInit {

 private valorObtenido:number=0;
  public myChart:any;
  public chartOptions:any;

  constructor() { 
    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
      this.valorObtenido=60;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },6000);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.generarChart();
  }

  generarChart() {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° 1'
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }

} */