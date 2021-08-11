import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/models/interfaces/dto/client.interface';
import { LoginDTO } from 'src/app/models/interfaces/dto/login.interface';
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
export class LoginService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  loginByEmailAndPassword(email: string, senha: string): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(`${this.baseUrl}/login`, {
      email: email,
      senha: senha,
      httpOptions,
    });
  }

  logout() {
    this.http.get(`${this.baseUrl}/login/logout`, httpOptions);
  }
}
