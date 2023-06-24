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

  constructor(private cartService: CartService, private router: Router) { 
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

    this.cartService.cartPrice$.subscribe(price => {
      this.totalPrice = price;
    });

  }
  
  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  // updateCart() {
  //   this.cartService.updateCart(this.cartItems);
  // }

  updateCart() {
  this.cartService.updateCartItemQuantity(this.product, this.product.quantity);
}


  // onQuantityChange() {
  //   this.updateCart();
  // }

  onQuantityChange() {
    // Calculate the total price based on the selected quantity
    this.product.totalPrice = this.product.price * this.product.quantity;
    this.updateCart();
  }

  increaseQuantity(): void {
    this.product.quantity++;
    this.updateCart();
  }
  
  decreaseQuantity(): void {
    if (this.product.quantity > 1) {
      this.product.quantity--;
      this.updateCart();
    }
  }

  resetCart() : void {
    this.cartService.resetCart();
  }

  
  // incrementValue(fieldName: string): void {
  //     const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
  //     const currentVal = parseInt(inputElement.value, 10);
    
  //     if (!isNaN(currentVal)) {
  //       inputElement.value = String(currentVal + 1);
  //       this.cartItemCount++; // Increment the cart item count
  //     } else {
  //       inputElement.value = '0';
  //     }
  //   }
    
  //   decrementValue(fieldName: string): void {
  //     const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
  //     const currentVal = parseInt(inputElement.value, 10);
    
  //     if (!isNaN(currentVal) && currentVal > 0) {
  //       inputElement.value = String(currentVal - 1);
  //       this.cartItemCount--; // Decrement the cart item count
  //     } else {
  //       inputElement.value = '0';
  //     }}
  
    
  
  }