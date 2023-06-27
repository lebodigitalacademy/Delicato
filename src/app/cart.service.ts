
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take} from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: any[] = [];
  private quantitySubject = new BehaviorSubject<number>(0);
  private countSubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);
  private cartItemsSubject = new BehaviorSubject<Product[]>([]);

  quantity$ = this.quantitySubject.asObservable();
  count$ = this.countSubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();
  cartItems$ = this.cartItemsSubject.asObservable();
  cartPrice$: any;

  constructor() { }

  addToCart(product: any) {
    console.log(product)
    const cartItem = this.cartItems.find(item => item.productId === product.productId);

    if (cartItem) {
      const totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
      this.totalPriceSubject.next(totalPrice);
      cartItem.quantity++;
      this.countSubject.next(this.countSubject.value + 1); // Increase the countSubject value
      this.updateCartState();
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
      this.countSubject.next(this.countSubject.value + 1); // Increase the countSubject value
      this.updateCartState();
    }

    this.updateCartState();
  }

  removeFromCart(product: any) {
    const index = this.cartItems.findIndex(item => item.productId === product.productId);

    if (index !== -1) {
      const removedItem = this.cartItems.splice(index, 1)[0];
      this.updateCartState();
    }
  }

   updateCartState() {
    const quantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    const count = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = this.cartItems.reduce((total, item) => total+item.price *item.quantity, 0);

    this.quantitySubject.next(quantity);
    this.countSubject.next(count);
    this.totalPriceSubject.next(totalPrice);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    this.updateCartState();
  }
}












  
  
  
