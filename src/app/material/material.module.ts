import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  exports : [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
