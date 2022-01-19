import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/layout/main/main.models';


@Component({
  selector: 'app-popular-categories',
  templateUrl: './popular-categories.component.html',
  styleUrls: ['./popular-categories.component.scss']
})
export class PopularCategoriesComponent implements OnInit {
  mayInterest: InfoCard[] = [
    {src: './../../assets/images/phones.png', bg_color: 'bg-gray-light', title: 'Celulares'},
    {src: './../../assets/images/play.png', bg_color: 'bg-blue', title: 'Video juegos'},
    {src: './../../assets/images/shoe.png', bg_color: 'bg-yellow', title: 'Moda'},
    {src: './../../assets/images/laptop.png', bg_color: 'bg-green', title: 'Computación'},
    {src: './../../assets/images/audio.png', bg_color: 'bg-blue', title: 'Audio'},
    {src: './../../assets/images/tv.png', bg_color: 'bg-red-light', title: 'Televisores'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
