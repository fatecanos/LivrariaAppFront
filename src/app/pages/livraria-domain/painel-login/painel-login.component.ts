import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './painel-login.component.html',
  styleUrls: ['./painel-login.component.scss']
})
export class PainelLoginComponent implements OnInit {

  isLoading: boolean = false;

  formulario: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  enviar() {
    if(this.formulario.valid) {
      this.isLoading = true;

      setTimeout(()=> {
        console.log("enviando");
        this.isLoading = false;
        sessionStorage.setItem('isLogado', "1");
        this.router.navigate(['/livraria']);
      }, 2000)
    }
  }

}
