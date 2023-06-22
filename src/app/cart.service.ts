import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public cartItems$ = this.cartItemsSubject.asObservable();
  
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  private cartCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCountSubject.asObservable();

  constructor(){}

  addToCart(product: Product) {
  
    const currentItems = this.cartItemsSubject.getValue();
    const isProductInCart = currentItems.some(item => item.productId === product.id);
    if (!isProductInCart) {
      const updatedItems = [...currentItems, product];
      this.cartItemsSubject.next(updatedItems);

      const currentCount = this.cartCountSubject.getValue();
      const updatedCount = currentCount + 1;
      this.cartCountSubject.next(updatedCount);
    }
   
  }

  getCartItems(): Observable<Product[]> {
    return this.cartProducts.asObservable();
  }

  getProducts() {
    return this.products;
  }
  
  clearCart(product: Product): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(updatedItems);

    const currentCount = this.cartCountSubject.getValue();
    const updatedCount = currentCount - 1;
    this.cartCountSubject.next(updatedCount);
  }

  removeFromCart(product: Product): Observable<void> {
    return new Observable<void>((observer) => {
      this.cartItems$.pipe(
        take(1),
        map(items => items.filter(item => item.id !== product.id)),
      ).subscribe(updatedItems => {
        this.cartItemsSubject.next(updatedItems);
        observer.next();
        observer.complete();
      });
    });
  }
  
}
