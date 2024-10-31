import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NotImageDirective } from './directives/not-image.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    NotImageDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    NotImageDirective
  ]
})
export class CoreModule { }
