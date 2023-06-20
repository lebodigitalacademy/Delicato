import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cartItemCount: number = 0;
  product: any;
  cartItems: Product[] = [];

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
  }
  
  
}
