import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { InputSearchComponent } from './input-search/input-search.component';



@NgModule({
  declarations: [
    BadgeComponent,
    InputSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BadgeComponent,
    InputSearchComponent
  ]
})
export class ComponentUiModule { }
