import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CupomDTO } from 'src/app/models/interfaces/dto/cupom.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  baseURL = environment.baseUrl;

  constructor(private http: HttpClient) { }

  obterCuponsCliente(): Observable<CupomDTO[]> {
    const id = Number(sessionStorage.getItem('isLogado'));
    return this.http.get<CupomDTO[]>(`${this.baseURL}/cupom/${id}`)
  }
}
