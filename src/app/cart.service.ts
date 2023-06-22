import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  private cartPriceSubject = new BehaviorSubject<number>(0);


  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  cartCount$ = this.cartCountSubject.asObservable();
  cartPrice$ = this.cartPriceSubject.asObservable();

  // cartItems = this.cartItemsSubject.asObservable();
  public cartItems$ = this.cartItemsSubject.asObservable();
  

  constructor(){}

  addToCart(product: any) {
    // const currentItems = this.cartProducts.value;
    // currentItems.push(product);
    // this.cartProducts.next(currentItems);
    const currentItems = this.cartItemsSubject.getValue();

    const isProductInCart = currentItems.some(item => item.productId === product.productId);
    console.log('HI'+product.productId)

    if (!isProductInCart) {
      const updatedItems = [...currentItems, product];
      const count = this.products.reduce((total, item) => total + item.quantity, 0);
      this.cartPriceSubject.next(this.cartPriceSubject.value + product.price);


      this.cartCountSubject.next(count);
      this.cartItemsSubject.next(updatedItems);
    }
    // const updatedItems = [...currentItems, product];
    // this.cartItemsSubject.next(updatedItems);
  }

  getCartItems(): Observable<Product[]> {
    return this.cartProducts.asObservable();
  }

  getProducts() {
    return this.products;
  }

  removeFromCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(updatedItems);
  }

  updateQuantity(item: any) {
    const existingItem = this.products.find(i => i.productId === item.productId);

    if (existingItem) {
      existingItem.quantity = item.quantity;
    }
  }

  updateCart(cartItems: any[]) {
    let totalPrice = 0;
    let totalCount = 0;

    for (const item of cartItems) {
      totalPrice += item.price * item.quantity;
      totalCount += item.quantity;
    }

    this.cartPriceSubject.next(totalPrice);
    this.cartCountSubject.next(totalCount);
  }
}





  
  
  
