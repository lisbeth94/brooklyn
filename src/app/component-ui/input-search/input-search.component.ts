import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  @Input() searchPlaceholder : string = "Buscar";
  @Input() text: string = "";

  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchText(text: any) {
    this.search.emit(text.target.value);
  } 

}
