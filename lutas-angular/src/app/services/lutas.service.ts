import { Injectable } from '@angular/core';
import { Lutas } from '../model/lutas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LutasService {

  constructor(private httpClient: HttpClient) { }

  public getLutadores(): Observable<Lutas[]> {
    return this.httpClient.get<Lutas[]>("ap1-cloud.azurewebsites.net/lutadores");
  }

  public getLutadoresById(id: any): Observable<Lutas> {
    return this.httpClient.get<Lutas>("ap1-cloud.azurewebsites.net/lutadores/" + id);
  }

  public createLutador(lutador: Lutas): Observable<Lutas> {
    return this.httpClient.post<Lutas>('ap1-cloud.azurewebsites.net/lutadores', lutador);
  }
}


