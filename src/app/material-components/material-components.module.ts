import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  exports : [
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class MaterialComponentsModule { }
