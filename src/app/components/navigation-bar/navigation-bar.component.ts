import { Component, OnChanges, OnInit } from '@angular/core';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login-service.service';
//import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  items:any[] = []; 
  cartIcon = faShoppingCart;
  profileIcon = faUser;
  searchIcon = faSearch;

  cartItemCount: number = 0;

  arr: any[]= [];

  cartTotal: number = 0;

  isLoggedIn$ = this.loginService.isLoggedIn;
  username$ = this.loginService.isLoggedIn;

  constructor(private cartService: CartService, private router: Router,private loginService: LoginServiceService) {}

  ngOnInit(): void {
 /*    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
    }); */
    this.cartService.count$.subscribe(count => {
      this.cartItemCount = count;
    });
    // this.cartService.getCartItems().subscribe((item: any)=> {
    //   this.arr.push(item);
    //   console.log(this.arr);
    // })
  }

  incrementValue(fieldName: string): void {
    const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
    const currentVal = parseInt(inputElement.value, 10);

    if (!isNaN(currentVal)) {
      inputElement.value = String(currentVal + 1);
      this.cartItemCount = currentVal + 1; // Update cartItemCount
    } else {
      inputElement.value = '0';
      this.cartItemCount = 0; // Update cartItemCount
    }
  }
  
  decrementValue(fieldName: string): void {
    const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
    const currentVal = parseInt(inputElement.value, 10);

    if (!isNaN(currentVal) && currentVal > 0) {
      inputElement.value = String(currentVal - 1);
      this.cartItemCount = currentVal - 1; // Update cartItemCount
    } else {
      inputElement.value = '0';
      this.cartItemCount = 0; // Update cartItemCount
    }
  }
  signup(){
    this.router.navigate(['/register']);
  }

  login(){
    this.router.navigate(['/login']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  signout(){
    this.loginService.logout();
    
  }
}
