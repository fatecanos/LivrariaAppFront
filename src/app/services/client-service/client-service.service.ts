import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { MessageInterface } from 'src/app/models/interfaces/dto/message.interface';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  saveClient(client: ClienteDTO): Observable<MessageInterface> {
    let payload = JSON.stringify(client);
    return this.http.post<MessageInterface>(
      `${this.baseUrl}/clientes`,
      payload,
      httpOptions
    );
  }

  getClientById(id: number | undefined): Observable<ClienteDTO> {

    return this.http.get<ClienteDTO>(
      `${this.baseUrl}/clientes/meus_dados/${id}`,
      // `${this.baseUrl}/clientes/${id}`,
      httpOptions
    );
  }

  getClients(): Observable<ClienteDTO[]> {
    return this.http.get<ClienteDTO[]>(`${this.baseUrl}/clientes`, httpOptions);
  }

  updateClientById(
    id: number | undefined,
    clientData?: ClienteDTO
  ): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/clientes/${id}`,
      clientData,
      httpOptions
    );
  }

  deleteClientById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/clientes?id=${id}`, httpOptions);
  }
}
