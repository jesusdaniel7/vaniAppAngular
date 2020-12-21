import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { storeTypesDTO } from '../store-types';

@Component({
  selector: 'app-store-type-create',
  templateUrl: './store-type-create.component.html',
  styleUrls: ['./store-type-create.component.css'],
})
export class StoreTypeCreateComponent implements OnInit{
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  model: storeTypesDTO = {
    name: 'Herramientas'
  }

  ngOnInit(): void {

  }

  saveChanges(storeType: storeTypesDTO) {
    console.log(storeType);
    alert('ha agregado una tienda. ');
    this.router.navigate(['/storetypes']);
  }
}
