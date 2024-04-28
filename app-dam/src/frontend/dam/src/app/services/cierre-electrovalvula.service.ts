import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CierreElectrovalvulaService {


  constructor(private _http: HttpClient) { }


  postCierreElectrovalvula (dispositivoId:number): Promise<any> {
    
    
    return   firstValueFrom(this._http.post(`http://localhost:8000/cierreElectrovalvula`,{ "dispositivoId": `${dispositivoId}`} ))  

  } 

}
