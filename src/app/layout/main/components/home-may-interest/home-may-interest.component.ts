import { Component, OnInit } from '@angular/core';
import { infoCard } from '../../main.models';

@Component({
  selector: 'app-home-may-interest',
  templateUrl: './home-may-interest.component.html',
  styleUrls: ['./home-may-interest.component.scss']
})
export class HomeMayInterestComponent implements OnInit {
  mayInterest: infoCard[] = [
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
