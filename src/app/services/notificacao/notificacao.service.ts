import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificacaoInterface } from 'src/app/models/interfaces/dto/notificacoes.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  obterNotificacoes(): Observable<NotificacaoInterface[]>{
    const id = Number(sessionStorage.getItem('isLogado'));
    return this.http.get<NotificacaoInterface[]>(`${this.baseUrl}/notificacoes/${id}`)
  }
}
