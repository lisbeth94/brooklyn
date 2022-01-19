import { Component, Input, OnInit } from '@angular/core';
import { InfoBanner } from 'src/app/layout/main/main.models';

@Component({
  selector: 'app-info-banner',
  templateUrl: './info-banner.component.html',
  styleUrls: ['./info-banner.component.scss']
})
export class InfoBannerComponent implements OnInit {
  @Input() info : InfoBanner[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
