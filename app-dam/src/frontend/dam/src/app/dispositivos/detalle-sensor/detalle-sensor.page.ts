//correr antes npm install --save highcharts
/* se agrego  accessibility:{
      enabled: false
   
    } */


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UltimaMedicionService } from '../../services/ultima-medicion.service';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-detalle-sensor',
  templateUrl: './detalle-sensor.page.html',
  styleUrls: ['./detalle-sensor.page.scss'],
})
export class DetalleSensorPage implements OnInit {

  valorObtenido: number =50;
  sensor: number = 3;
  public myChart:any;
  private chartOptions:any;

  /* mensajeHijo:string=""+this.valorObtenido; */

  constructor(private _route:ActivatedRoute,private _UltimaMedicionService: UltimaMedicionService) { 

    setTimeout(()=>{
      console.log("Cambio el valor del sensor");
    
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    },600);
    
   
   
  }

  actualizarUltimaMedicion(valorObtenido:number){

    console.log("Cambio el valor del sensor");
    /* this.valorObtenido=60; */
    //llamo al update del chart para refrescar y mostrar el nuevo valor
    this.myChart.update({series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]});
  


  }

  onMensajeHijo(mensaje:string) {
    this.valorObtenido = parseInt(mensaje);
    this.actualizarUltimaMedicion(this.valorObtenido);
    console.log(this.valorObtenido)
   }
  

  async ngOnInit() {
     let id = this._route.snapshot.paramMap.get('id');

     if(id != null){

      this.sensor = parseInt(id);
      await this.obtenerUltimaMedicion(this.sensor);
      console.log(`El valor del sensor detalle es: ${this.sensor}`);

     }
     else{
      console.log(`El valor del sensor detalle es null!!!!!`);
     }
     
   
  }

  

  async ionViewDidEnter() {
      await this.generarChart();
  }

  async obtenerUltimaMedicion(dispositivoId:number){

    await this._UltimaMedicionService.getUltimaMedicion(dispositivoId)
    .then((medicion) => {

      console.log("entro a ultima medicion")
     this.valorObtenido = parseInt(medicion[0].valor);
      
    })
    .catch((error) => {
      console.log(error)
    })

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
          text: "Sensor N° "+this.sensor
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
    ,
    accessibility:{
      enabled: false
    }

    };
     this.myChart =    Highcharts.chart('highcharts', this.chartOptions );
  }

}
