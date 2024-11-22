import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  apiUri = '/api/gastos'; // Cambiar la URI a la de gastos

  constructor(private http: HttpClient) { }

  getAllGastosData(): Observable<any> {
    return this.http.get(this.apiUri, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getOneGasto(id: any): Observable<any> {
    return this.http.get<any>(this.apiUri + '/' + id);
  }

  newGasto(data: any): Observable<any> {
    return this.http.post<any>(this.apiUri, data);
  }

  updateGasto(id: any, data: any): Observable<any> {
    console.log(data);
    return this.http.put<any>(this.apiUri + '/' + id, data);
  }

  deleteGasto(id: any) {
    return this.http.delete<any>(this.apiUri + '/' + id);
  }
  httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
}
