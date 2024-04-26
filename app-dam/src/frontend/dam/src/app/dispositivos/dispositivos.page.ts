import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, map } from 'rxjs';
import { DispositivoService } from '../services/dispositivo.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit, OnDestroy {

  observable$: Observable<any>
 
  constructor(private _dispositivoService: DispositivoService,
    private _actRouter: ActivatedRoute) {
    this.observable$ = interval(1000)

    const valuePlusTen$ = this.observable$.pipe(map((val) => val+10))

  
  }

  
  async ngOnInit() {
    await this._dispositivoService.getDispositivos()
      .then((dispositivos) => {
        console.log(dispositivos)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('Me ejecuto primero')
  }

/*   ionViewWillEnter () {
    console.log(`Me llegó el id: ${Number(this._actRouter.snapshot.paramMap.get('id'))}`)
  } */


  ngOnDestroy(): void {
  }
}
