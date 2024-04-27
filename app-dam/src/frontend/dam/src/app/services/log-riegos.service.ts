import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogRiegosService {

  constructor(private _http: HttpClient) { 
  }

  getLogRiegos (dispositivoId:number): Promise<any> {

    return   firstValueFrom(this._http.get(`http://localhost:8000/logRiegos/${dispositivoId}`)) 
    
  } 

}
