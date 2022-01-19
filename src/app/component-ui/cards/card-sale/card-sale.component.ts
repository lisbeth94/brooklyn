import { Component, Input, OnInit } from '@angular/core';
import { InfoSalesCard } from 'src/app/layout/main/main.models';

@Component({
  selector: 'app-card-sale',
  templateUrl: './card-sale.component.html',
  styleUrls: ['./card-sale.component.scss']
})
export class CardSaleComponent implements OnInit {
  @Input() InfoCard: InfoSalesCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
