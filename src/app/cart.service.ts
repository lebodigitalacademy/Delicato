import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  cartItems = this.cartItemsSubject.asObservable();

  constructor(){}

  // addToCart(product: Product): void {
  //   const currentItems = this.cartItems.value;
  //   currentItems.push(product);
  //   this.cartItems.next(currentItems);
  // }

  addToCart(product: Product) {
    const currentItems = this.cartProducts.value;
    currentItems.push(product);
    this.cartProducts.next(currentItems);
    const updatedItems = [...currentItems, product];
    this.cartItemsSubject.next(updatedItems);
  }

  getCartItems(): Observable<Product[]> {
    return this.cartProducts.asObservable();
  }

  getProducts() {
    return this.products;
  }
  
  
}
