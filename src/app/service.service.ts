import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './interface/product';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //private apiUrl = "https://fakestoreapi.com/products";

  constructor(private http:HttpClient) { }

  // backend url

  private url ='http://localhost:8081/api/products/getAllProducts';

  searchProducts(query: string): Observable<any> {
    const apiUrl = `${this.url}?q=${query}`;
    return this.http.get(apiUrl);
  }

  // GET, ADD, UPDATE and DELETE Http methods that make calls to our restful API (backend)
  getEmployeeAll(){
    return this.http.get(`${this.url}`)
  }

  getAllProducts(){
   return this.http.get('http://localhost:8081/api/products/getAllProducts');
  }

  getOneProduct(id:number){
    return this.http.get('http://localhost:8081/api/products/'+id);
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

   createUser(body: any){
    return this.http.post('http://localhost:3000/users', body);
  }
  getAllUsers(){
    return this.http.get('http://localhost:3000/users');
   }
   addShipping(body:any){
    return this.http.post('http://localhost:3000/shipping', body);
   }
   addPayment(body:any){
    return this.http.post('http://localhost:3000/payment', body);
   }

   addOrder(data:any){
    return this.http.post('http://localhost:3000/orders', data);
   }
}
