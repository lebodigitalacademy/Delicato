import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemCount: number = 0;
  product: any;

  cartItems: any[] = [];
  totalPrice:number=0;


  constructor(private cartService: CartService) { 
    this.cartService.getCartItems().subscribe(products => {
      // Do something with the cart items
    });
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
      this.cartItems = products;
    });

    this.cartService.cartItems$.subscribe(products => {
      this.cartItems = products;
    });


    this.cartService.cartPrice$.subscribe(price => {
      this.totalPrice = price;
    });
  }
  
  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  updateCart() {
    this.cartService.updateCart(this.cartItems);
  }

  onQuantityChange() {
    this.updateCart();
  }
  }


  
  

