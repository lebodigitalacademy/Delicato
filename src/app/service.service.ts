import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  // backend url

  private url ="https://fakestoreapi.com/products";

  // GET, ADD, UPDATE and DELETE Http methods that make calls to our restful API (backend)
  getEmployeeAll(){
    return this.http.get(`${this.url}`)
  }
}
