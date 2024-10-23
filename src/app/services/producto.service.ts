import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiServer } from './../apiServer';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private ApiUrl: string = apiServer.serverUrl;

  constructor( private http: HttpClient) { }

  getProduct():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.ApiUrl}`)
  }
}
