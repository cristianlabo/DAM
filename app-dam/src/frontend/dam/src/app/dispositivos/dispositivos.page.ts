import { Component, OnDestroy, OnInit } from '@angular/core';

import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit, OnDestroy {

 
 
  constructor(private _dispositivoService: DispositivoService,
    private _actRouter: ActivatedRoute) {
  
  }

  
  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
