import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  cartItemCount: number = 0;
  product: any;
  cartItems: any[] = [];
  totalPrice:number=0;

  constructor(private cartService: CartService) { 
    this.cartService.getCartItems().subscribe(products => {
      
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