import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { storeTypesDTO } from '../store-types';

@Component({
  selector: 'app-store-types-form',
  templateUrl: './store-types-form.component.html',
  styleUrls: ['./store-types-form.component.css'],
})
export class StoreTypesFormComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder) {}

  @Input()
  model:storeTypesDTO;

  @Output()
  onSubmit: EventEmitter<storeTypesDTO> = new EventEmitter<storeTypesDTO>();

  saveChanges() {
    this.onSubmit.emit(this.form.value);
  }

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        {
          validators: [Validators.required, Validators.minLength(2)],
        },
      ],
    });

    if(this.model != undefined){
      this.form.patchValue(this.model);
    }
  }

  getErrors(): string {
    var campo = this.form.get('name');
    if (campo.hasError('required')) {
      return 'El campo name es requerido';
    }

    if (campo.hasError('minlength')) {
      return 'Debe tener una longitud mayor';
    }
    return '';
  }
}
