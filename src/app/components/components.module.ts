import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivHeaderComponent } from './liv-header/liv-header.component';
import { LivFooterComponent } from './liv-footer/liv-footer.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LivHeaderComponent, 
    LivFooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LivHeaderComponent,
    LivFooterComponent
  ]
})
export class ComponentsModule { }
