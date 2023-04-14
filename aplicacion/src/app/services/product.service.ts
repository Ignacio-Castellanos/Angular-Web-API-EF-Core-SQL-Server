import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
   private url= "Aplicacion";

  constructor(private http: HttpClient) { }

public getProducts() : Observable<product[]> {

  return this.http.get<product[]>(`${environment.apiUrl}/${this.url}`);

}


}
