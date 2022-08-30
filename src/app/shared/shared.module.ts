import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material-components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ReactiveFormsModule,
    FooterComponent,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
