import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
