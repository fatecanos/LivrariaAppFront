import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoInterface } from 'src/app/models/interfaces/client.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : 'http://localhost:4200',
    'Access-Control-Allow-Methods' : 'POST'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  baseUrl: string = environment.baseUrlMock;

  constructor(private http: HttpClient) { }

  getAddressById(id: number): Observable<EnderecoInterface[]> {
    return this.http.get<EnderecoInterface[]>(`${this.baseUrl}/enderecos/${id}`, httpOptions);
  }
}
