import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartCount: number = 0;
  product: any;
  cartItems: Product[] = [];


  ngOnInit(): void {
  //   this.cartService.cartItems$.subscribe(products => {
  //     this.cartCount = products.length;
  //     this.cartItems = products;
  //   });

  //   this.cartService.cartItems$.subscribe(products => {
  //     this.cartItems = products;
  //   });
  // }
  
  // clearCart(product: Product): void {
  //   this.cartService.clearCart(product);
  }
  
}
