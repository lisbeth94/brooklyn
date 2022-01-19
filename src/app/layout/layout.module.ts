import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ComponentUiModule } from '../component-ui/component-ui.module';
import { FloatNavItemsComponent } from './header/float-nav-items/float-nav-items.component';
import { HeaderBannerComponent } from './header/header-banner/header-banner.component';
import { HomeMayInterestComponent } from './main/components/home-may-interest/home-may-interest.component';
import { HomeComponent } from './main/components/home/home.component';
import { PopularCategoriesComponent } from './main/components/popular-categories/popular-categories.component';
import { HomeOfferComponent } from './main/components/home-offer/home-offer.component';
import { HomeSoldComponent } from './main/components/home-sold/home-sold.component';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FloatNavItemsComponent,
    HeaderBannerComponent,
    HomeMayInterestComponent,
    HomeComponent,
    PopularCategoriesComponent,
    HomeOfferComponent,
    HomeSoldComponent
  ],
  imports: [
    CommonModule,
    ComponentUiModule
  ],
  exports: [
    MainComponent]
})
export class LayoutModule { }
