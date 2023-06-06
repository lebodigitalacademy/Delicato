import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  cartItems = this.cartItemsSubject.asObservable();


  addToCart(item: any) {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = [...currentItems, item];
    this.cartItemsSubject.next(updatedItems);
  }
  constructor() { }
}
