import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoInterface } from 'src/app/models/interfaces/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartoesService {
  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  getCartoes(): Observable<CartaoInterface[]> {
    return this.http.get<CartaoInterface[]>(this.baseUrl+'/cartoes');
  }
}
