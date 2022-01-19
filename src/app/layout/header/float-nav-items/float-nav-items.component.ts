import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-float-nav-items',
  templateUrl: './float-nav-items.component.html',
  styleUrls: ['./float-nav-items.component.scss']
})
export class FloatNavItemsComponent implements OnInit {
  count_notify: number = 3;
  count_shoppingCart: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

}
