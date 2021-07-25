import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './store-home.component.html',
  styleUrls: ['./store-home.component.scss']
})
export class StoreHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  navegarEstoque() {
    this.router.navigate(['/livraria/estoque'])
  }

}
