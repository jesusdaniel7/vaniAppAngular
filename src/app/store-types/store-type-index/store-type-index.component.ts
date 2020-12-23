import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { storeTypesDTO } from '../store-types';
import { StoreTypesServiceService } from '../store-types-service.service';

@Component({
  selector: 'app-store-type-index',
  templateUrl: './store-type-index.component.html',
  styleUrls: ['./store-type-index.component.css'],
})
export class StoreTypeIndexComponent implements OnInit {
  constructor(
    private router: Router,
    private storeTypeService: StoreTypesServiceService
  ) {}

  storeTypeDTO: storeTypesDTO[];
  columnasAMostrar = ['StoreTypeId', 'Name'];
  ngOnInit(): void {
      //Codigo real
      this.storeTypeService.getAll().subscribe(
        (storeTypeDTO) => {
          this.storeTypeDTO = storeTypeDTO;
          console.log(this.storeTypeDTO);
        },
        (error) => console.log(error)
      );

  }
}
