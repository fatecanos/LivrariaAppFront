import { NgModule } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

const material_components = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: [
    ...material_components
  ],
  exports: [
    ...material_components
  ]
})
export class MaterialModule { }
