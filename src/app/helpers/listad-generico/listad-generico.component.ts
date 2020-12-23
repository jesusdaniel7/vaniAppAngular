import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listad-generico',
  templateUrl: './listad-generico.component.html',
  styleUrls: ['./listad-generico.component.css'],
})
export class ListadGenericoComponent implements OnInit {
  constructor() {}

  @Input()
  listado;

  ngOnInit(): void {
  }

}
