import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/helpers/helpers';
import { storeTypesCreationDTO } from '../store-types';
import { StoreTypesServiceService } from '../store-types-service.service';

@Component({
  selector: 'app-store-type-create',
  templateUrl: './store-type-create.component.html',
  styleUrls: ['./store-type-create.component.css'],
})
export class StoreTypeCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private storeTypeService: StoreTypesServiceService
  ) {}

  ngOnInit(): void {}

  errors: string[] = [];
  saveChanges(storeTypeCreationDTO: storeTypesCreationDTO) {
    this.storeTypeService.Post(storeTypeCreationDTO).subscribe(
      () => {
        this.router.navigate(['/storetypes']);
      },
      (error) => (this.errors = parsearErroresAPI(error))
    );
    console.log(storeTypeCreationDTO);
  }
}
