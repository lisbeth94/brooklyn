import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/layout/main/main.models';

@Component({
  selector: 'app-card-circle',
  templateUrl: './card-circle.component.html',
  styleUrls: ['./card-circle.component.scss']
})
export class CardCircleComponent implements OnInit {
  @Input() InfoCard: InfoCard[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
