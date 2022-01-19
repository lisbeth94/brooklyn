import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ComponentUiModule } from '../component-ui/component-ui.module';
import { FloatNavItemsComponent } from './header/float-nav-items/float-nav-items.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FloatNavItemsComponent
  ],
  imports: [
    CommonModule,
    ComponentUiModule
  ],
  exports: [
    MainComponent]
})
export class LayoutModule { }
