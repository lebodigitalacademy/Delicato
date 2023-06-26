import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';
import { LoginServiceService } from '../login-service.service';


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
  
  isLoggedIn$ = this.loginService.isLoggedIn;

  constructor(private cartService: CartService, private loginService: LoginServiceService, private router: Router) { }

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

  alert(): void{
    alert("Please Register/Login");
  }
  }