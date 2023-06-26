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
  minimumValue = 1;
  quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  updatedCart:any;
  totalQuantity:any;


  constructor(private cartService: CartService) { 
 
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
      this.cartItems = products;
      console.log(this.cartItems);
    });


    this.cartService.totalPrice$.subscribe(price => {
      this.totalPrice = price;
    });

    this.cartService.quantity$.subscribe(quantity => {
      this.totalQuantity = quantity;
    });


  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.updateCart();
  }

  updateCart() {
    this.cartService.updateCartState();
  }

  onQuantityChange() {
    this.updateCart();
  }

  resetCart(){
    this.resetCart();
  }
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
  
    