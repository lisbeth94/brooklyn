import { Component, OnInit } from '@angular/core';
import { InfoSalesCard } from '../../main.models';

@Component({
  selector: 'app-home-sold',
  templateUrl: './home-sold.component.html',
  styleUrls: ['./home-sold.component.scss']
})
export class HomeSoldComponent implements OnInit {
  sold: InfoSalesCard[] = [
    {
      src : './../../assets/images/sale-tv.png',
      sale_mount : 1740,
      info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      offer_mout : 1234,
      dto: 40,
      send_type: 'Envío gratis'
    },
    {
      src : './../../assets/images/sale-tv.png',
      sale_mount : 1740,
      info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      offer_mout : 1234,
      dto: 40,
      send_type: 'Envío gratis'
    },
    {
      src : './../../assets/images/sale-tv.png',
      sale_mount : 1740,
      info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      offer_mout : 1234,
      dto: 40,
      send_type: 'Envío gratis'
    },
    {
      src : './../../assets/images/sale-tv.png',
      sale_mount : 1740,
      info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      offer_mout : 1234,
      dto: 40,
      send_type: 'Envío gratis'
    },
    {
      src : './../../assets/images/sale-tv.png',
      sale_mount : 1740,
      info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      offer_mout : 1234,
      dto: 40,
      send_type: 'Envío gratis'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
