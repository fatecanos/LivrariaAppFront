import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'clientes', 
    loadChildren: 'src/app/pages/cliente-domain/cliente-domain.module#ClienteDomainModule'
  },
  {
    path: 'livraria',
    loadChildren: 'src/app/pages/livraria-domain/livraria-domain.module#LivrariaDomainModule'
  },
  {
    path: 'admin',
    loadChildren: 'src/app/pages/admin-domain/admin-domain.module#AdminDomainModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
