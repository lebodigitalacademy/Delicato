import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interface/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl: any;

  constructor(private http:HttpClient) { }

  // backend url

  private url ="https://fakestoreapi.com/products";

  searchProducts(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get(url);
  }

  // GET, ADD, UPDATE and DELETE Http methods that make calls to our restful API (backend)
  getEmployeeAll(){
    return this.http.get(`${this.url}`)
  }

  getAllProducts(){
   return this.http.get('https://fakestoreapi.com/products');
  }

  getOneProduct(id:number){
    return this.http.get('https://fakestoreapi.com/products/'+id);
   }

  createProduct(body: Product){
    return this.http.post('', body);
  }

  updateProduct(id:number, body: Product){
    return this.http.put(''+id, body );
  }

   deleteProduct(id:number){
    return this.http.delete(''+id);
   }

}
