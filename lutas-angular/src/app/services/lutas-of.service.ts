import { HttpClient } from '@angular/common/http';
import { lutas_of } from './../model/lutas_of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LutasOfService {

  constructor(private httpCliente: HttpClient) { }

  public getMusicas(idLutador : any): Observable<lutas_of[]> {
    return this.httpCliente.get<lutas_of[]>('ap1-cloud.azurewebsites.net/lutador/${idLutador}/lutas/')
  }


}
