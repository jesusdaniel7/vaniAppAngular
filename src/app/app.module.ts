import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './stores/index/index.component';
import { CreateComponent } from './stores/create/create.component';
import { InicioComponent } from './lading-page/inicio/inicio.component';
import { MenuComponent } from './lading-page/menu/menu.component';
import {MaterialModule} from './material/material.module';
import { EditComponent } from './stores/edit/edit.component';
import { DetailsComponent } from './stores/details/details.component';
import { WildcardComponent } from './erros/wildcard/wildcard.component';
import { StoreTypeIndexComponent } from './store-types/store-type-index/store-type-index.component';
import { StoreTypeCreateComponent } from './store-types/store-type-create/store-type-create.component';
import { StoreTypesFormComponent } from './store-types/store-types-form/store-types-form.component';
import { StoreTypesEditComponent } from './store-types/store-types-edit/store-types-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    InicioComponent,
    MenuComponent,
    EditComponent,
    DetailsComponent,
    WildcardComponent,
    StoreTypeIndexComponent,
    StoreTypeCreateComponent,
    StoreTypesFormComponent,
    StoreTypesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
