import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UltimaMedicionService {

  constructor(private _http: HttpClient) { 
  }

  getUltimaMedicion (dispositivoId:number): Promise<any> {

    return   firstValueFrom(this._http.get(`http://localhost:8000/ultimaMedicion/${dispositivoId}`)) 
    
  } 

}
