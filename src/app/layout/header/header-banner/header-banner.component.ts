import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  templateUrl: './header-banner.component.html',
  styleUrls: ['./header-banner.component.scss']
})
export class HeaderBannerComponent implements OnInit {
  category: string[] = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

  constructor() { }

  ngOnInit(): void {
  }

}
