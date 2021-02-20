import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientInterface } from 'src/app/models/interfaces/client.interface';
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
export class ClientService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  saveClient(client: ClientInterface): Observable<ClientInterface> {
    let payload = JSON.stringify(client);
    return this.http.post<ClientInterface>(`${this.baseUrl}/clientes`, payload, httpOptions);
  }

  getClientById(id: number): Observable<ClientInterface> {
    return this.http.get<ClientInterface>(`${this.baseUrl}/clientes/${id}`, httpOptions)
  }

  updateClientById(id: number, clientData: ClientInterface): Observable<ClientInterface> {
    return this.http.put<ClientInterface>(`${this.baseUrl}/clientes/${id}`, clientData, httpOptions);
  }

  deleteClientById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes/${id}`, httpOptions);
  }
}
