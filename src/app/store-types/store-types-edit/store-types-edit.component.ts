import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storeTypesDTO } from '../store-types';

@Component({
  selector: 'app-store-types-edit',
  templateUrl: './store-types-edit.component.html',
  styleUrls: ['./store-types-edit.component.css']
})
export class StoreTypesEditComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  model: storeTypesDTO = {
    name: 'Comesticos'
  }
  
  saveChanges(storeType: storeTypesDTO) {
    console.log(storeType);
    alert('ha agregado una tienda. ');
    this.router.navigate(['/storetypes']);
  }

}
