import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private myAppUrl = 'https://localhost:44336/';
  private myApiUrl = 'api/tarjeta/'

  constructor(private http: HttpClient) { }

  saveTarjeta(tarjeta: any): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  getListTarjetas(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  deleteTarjeta(id: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + id);
  }

  updateTarjeta(id: number, tarjeta: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}
