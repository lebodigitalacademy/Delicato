import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: any[] = [];
  cartQuantity = 0;
  constructor() {
    const local = localStorage.getItem('products');
    const products = local ? JSON.parse(local) : [];
    this.products = products.map((x: any) => ({
      ...x,
      price: +(x.price || 0),
    }));
    this.cartQuantity = products ? products.length : 0;
  }
  addToCart(product: any) {
    this.products.push({
      name: product.Name,
      image: product.Attachment,
      price: +product.PriceWithIVA,
    });
    this.cartQuantity = this.products ? this.products.length : 0;

    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    localStorage.removeItem('products');
    this.products = [];
    this.cartQuantity = 0;
  }
}
