import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart.service';
//import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  cartIcon = faShoppingCart;
  profileIcon = faUser;
  searchIcon = faSearch;
  cartItemCount: number = 0;

  

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(items => {
      this.cartItemCount = items.length;
    });
  }
  

}
