import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteDTO, TelefoneDTO } from 'src/app/models/interfaces/dto/client.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  baseUrl: string = environment.urlMock;

  constructor(private http: HttpClient) { }
  
  inativarTelefonePorId(telefone: TelefoneDTO) {
    this.http.delete(`${this.baseUrl}/telefones/${telefone.id}`)
  }

  atualizarTelefonePorId() {

  }

  obterTelefonesPorIdCliente(idCliente: number) {
    
  }
}
