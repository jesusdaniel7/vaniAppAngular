import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { storeTypesCreationDTO, storeTypesDTO } from './store-types';

@Injectable({
  providedIn: 'root'
})
export class StoreTypesServiceService {

  constructor(private http: HttpClient) { }
  
  private apiURL = environment.apiURL + 'storetypes';

  public getAll(): Observable<storeTypesDTO[]>{
    return this.http.get<storeTypesDTO[]>(this.apiURL);
  }

  public Post(storeTypeCreationDTO: storeTypesCreationDTO){
    return this.http.post(this.apiURL, storeTypeCreationDTO);
  }
}
