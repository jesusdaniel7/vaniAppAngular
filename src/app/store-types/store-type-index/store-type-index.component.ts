import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-type-index',
  templateUrl: './store-type-index.component.html',
  styleUrls: ['./store-type-index.component.css']
})
export class StoreTypeIndexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

}
