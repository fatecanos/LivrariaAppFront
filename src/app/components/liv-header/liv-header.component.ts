import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'liv-header',
  templateUrl: './liv-header.component.html',
  styleUrls: ['./liv-header.component.scss']
})
export class LivHeaderComponent {
  showPainel: boolean = false;

  constructor(private router: Router) {

  }

  navigateToClientRegister() {
    this.router.navigate(['/novo-cliente']);
    this.showPainel = !this.showPainel;
  }

}
