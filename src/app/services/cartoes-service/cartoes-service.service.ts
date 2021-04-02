import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoDTO } from 'src/app/models/interfaces/dto/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {
  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  getCartoes(): Observable<CartaoDTO[]> {
    return this.http.get<CartaoDTO[]>(this.baseUrl+'/cartoes');
  }
}
