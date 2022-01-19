import { Component, Input, OnInit } from '@angular/core';
import { infoSalesCard } from 'src/app/layout/main/main.models';

@Component({
  selector: 'app-card-sale',
  templateUrl: './card-sale.component.html',
  styleUrls: ['./card-sale.component.scss']
})
export class CardSaleComponent implements OnInit {
  @Input() infoCard: infoSalesCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
