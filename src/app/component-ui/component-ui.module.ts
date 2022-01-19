import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { CardCircleComponent } from './cards/card-circle/card-circle.component';
import { CardSaleComponent } from './cards/card-sale/card-sale.component';
import { InfoBannerComponent } from './info-banner/info-banner.component';



@NgModule({
  declarations: [
    BadgeComponent,
    InputSearchComponent,
    CardCircleComponent,
    CardSaleComponent,
    InfoBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BadgeComponent,
    InputSearchComponent,
    CardCircleComponent,
    CardSaleComponent,
    InfoBannerComponent
  ]
})
export class ComponentUiModule { }
