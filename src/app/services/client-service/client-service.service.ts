import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteInterface, EnderecoInterface } from 'src/app/models/interfaces/client.interface';
import { MessageInterface } from 'src/app/models/interfaces/message.interface';
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
export class ClienteService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  saveClient(client: ClienteInterface): Observable<MessageInterface> {
    let payload = JSON.stringify(client);
    return this.http.post<MessageInterface>(`${this.baseUrl}/clientes`, payload, httpOptions);
  }

  getClientById(id: number | undefined): Observable<ClienteInterface> {
    return this.http.get<ClienteInterface>(`${this.baseUrl}/clientes/${id}`, httpOptions)
  }

  getClients(): Observable<ClienteInterface[]> {
    return this.http.get<ClienteInterface[]>(`${this.baseUrl}/clientes`, httpOptions)
  }

  updateClientById(id: number | undefined, clientData: ClienteInterface): Observable<ClienteInterface> {
    return this.http.put<ClienteInterface>(`${this.baseUrl}/clientes/${id}`, clientData, httpOptions);
  }

  deleteClientById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes?id=${id}`, httpOptions);
  }
}
