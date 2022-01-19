import { Component, Input, OnInit } from '@angular/core';
import { infoCard } from 'src/app/layout/main/main.models';

@Component({
  selector: 'app-card-circle',
  templateUrl: './card-circle.component.html',
  styleUrls: ['./card-circle.component.scss']
})
export class CardCircleComponent implements OnInit {
  @Input() infoCard: infoCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
