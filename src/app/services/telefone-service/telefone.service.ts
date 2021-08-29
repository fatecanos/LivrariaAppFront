import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
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
export class TelefoneService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  inativarTelefonePorId(idTelefone: number): Observable<MessageInterface> {
    console.log(`porra: ${idTelefone}`)
    return this.http.delete<MessageInterface>(
      `${this.baseUrl}/telefone/${idTelefone}`,
      httpOptions
    );
  }

  atualizarTelefone(telefoneDto: TelefoneDTO): Observable<MessageInterface> {
    return this.http.put<MessageInterface>(
      `${this.baseUrl}/telefone/${Number(sessionStorage.getItem('idUsuario'))}`,
      telefoneDto,
      httpOptions
    );
  }
}
