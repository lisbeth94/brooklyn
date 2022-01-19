import { Component, OnInit } from '@angular/core';
import { InfoBanner } from '../../main.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  banner1 : InfoBanner[] = [
    {
      src: './../../assets/images/img-banner.png',
      title: 'Crea tu tienda y disfruta de nuestros beneficios',
      info: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it.',
      tag_buttom: 'Ver más >',
      bg_color: 'bg-blue-light'
    }
  ];

  banner2: InfoBanner[] = [
    {
      info_top: 'ULTIMOS DÍAS',
      src: './../../assets/images/img-banner-running.png',
      title: 'Calzado adidas con 20% de dcto en running',
      tag_buttom: 'Ver más >',
      bg_color: 'bg-violet'
    }
  ]

  banner3: InfoBanner[] = [
    {
      info_top: 'ULTIMOS DÍAS',
      src: './../../assets/images/img-banner-family.png',
      title: 'Grandes ofertas en artículos para la cocina',
      tag_buttom: 'Ver más >',
      bg_color: 'bg-green-dark'
    }
  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
