import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  items: Product[] = [];

  private cartCount: number = 0;

  getCartCount(): number {
    return this.cartCount;
  }

  incrementCartCount(): void {
    this.cartCount++;
  }

  decrementCartCount(): void {
    if (this.cartCount > 0) {
      this.cartCount--;
    }
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http:HttpClient) { }

  getAllProducts(){
   return this.http.get('https://fakestoreapi.com/products');
  }

  getOneProduct(id:number){
    return this.http.get('https://fakestoreapi.com/products+'+id);
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
