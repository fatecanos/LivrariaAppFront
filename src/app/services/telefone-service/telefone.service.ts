import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }
  
  inativarTelefonePorId(telefone: TelefoneDTO) {
    
  }

  atualizarTelefonePorId() {

  }
}
