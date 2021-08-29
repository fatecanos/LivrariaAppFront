import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login-service.service';

@Component({
  templateUrl: './painel-login.component.html',
  styleUrls: ['./painel-login.component.scss'],
})
export class PainelLoginComponent implements OnInit {
  isLoading: boolean = false;

  formulario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  enviar() {
    if (this.formulario.valid) {
      setTimeout(() => {
        console.log('enviando');
        this.isLoading = false;
        sessionStorage.setItem('idUsuario', '1');
        this.router.navigate(['/livraria']);
      }, 2000);
    }
  }

  login() {
    if (this.formulario.valid) {
      this.isLoading = true;

      this.loginService
        .loginByEmailAndPassword(
          this.formulario.value['email'],
          this.formulario.value['senha']
        )
        .subscribe((response) => {
          this.isLoading = false;

          if (response.email != null) {
            sessionStorage.setItem('idUsuario', String(response.usuarioId));
            localStorage.setItem('perfilUsuario', String(response.perfilUsuario));
            this.router.navigate(['/livraria']);
          }
        });
    }
  }
}
