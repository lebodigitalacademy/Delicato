import { Component, OnChanges, OnInit } from '@angular/core';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
//import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  products:any[] = []; 
  cartIcon = faShoppingCart;
  profileIcon = faUser;
  searchIcon = faSearch;

  cartCount: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartCount = products.length;
    });
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
    this.router.navigate(['/']);
  }
}
