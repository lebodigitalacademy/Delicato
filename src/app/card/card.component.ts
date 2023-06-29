import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';
import { LoginServiceService } from '../login-service.service';
import Swal from 'sweetalert2';


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
  loggedInUserDetails$:any;

  constructor(private cartService: CartService, private loginService:LoginServiceService, private router:Router) { 
 
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

    this.loginService.loggedInUser$.subscribe(userDetails => {
      this.loggedInUserDetails$ = userDetails;
      console.log("BIG MOE"+this.loggedInUserDetails$)
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
  clearCart(){
    this.cartService.clearCart();
  }

  alert(): void{
    alert("Please Register/Login");
    }
  tryCheckout(){
    if (this.loggedInUserDetails$){
     this.router.navigate(['/checkout']);
    }
    else{
      Swal.fire({
        icon:"warning",
        title: 'You are not logged in',
        text: 'Login to access the checkout page',
      }).then((result) => {
        if (result.isConfirmed) {

          // User clicked "Yes" button, perform the routing
          this.router.navigate(['/login']); // Replace '/new-page' with the desired route
  
        }
      });

    }
  }
}