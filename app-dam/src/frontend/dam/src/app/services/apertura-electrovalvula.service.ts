import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AperturaElectrovalvulaService {


  constructor(private _http: HttpClient) { }


  postAperturaElectrovalvula (dispositivoId:number): Promise<any> {
    
    
    return   firstValueFrom(this._http.post(`http://localhost:8000/aperturaElectrovalvula`,{ "dispositivoId": `${dispositivoId}`} ))  

  } 

}
