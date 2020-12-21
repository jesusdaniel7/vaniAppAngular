import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './lading-page/inicio/inicio.component'
import {IndexComponent} from './stores/index/index.component'
import {CreateComponent} from './stores/create/create.component'
import {DetailsComponent} from './stores/details/details.component'
import {WildcardComponent} from './erros/wildcard/wildcard.component'
import {StoreTypeIndexComponent} from './store-types/store-type-index/store-type-index.component'
import {StoreTypeCreateComponent} from './store-types/store-type-create/store-type-create.component'
import {StoreTypesEditComponent} from './store-types/store-types-edit/store-types-edit.component'


const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'stores', component: IndexComponent},
  {path:'stores/create', component: CreateComponent},
  {path:'stores/details/:id', component: DetailsComponent},
  {path:'storetypes', component: StoreTypeIndexComponent},
  {path:'storetypes/create', component: StoreTypeCreateComponent},
  {path:'storetypes/edit/:id', component: StoreTypesEditComponent},
  {path:'**', component: WildcardComponent}

  // {path:'**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
