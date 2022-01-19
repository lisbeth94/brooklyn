import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  textFilter: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event:string){
    this.textFilter = event;
    if(this.textFilter !== ""){
      console.log(this.textFilter);
    }
  }

}
