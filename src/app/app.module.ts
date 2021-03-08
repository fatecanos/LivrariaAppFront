import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { ClienteDomainModule } from './pages/cliente-domain/cliente-domain.module';
import { LivrariaDomainModule } from './pages/livraria-domain/livraria-domain.module';
import { AdminDomainModule } from './pages/admin-domain/admin-domain.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ClienteDomainModule,
    LivrariaDomainModule,
    AdminDomainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
