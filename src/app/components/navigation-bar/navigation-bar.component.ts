import { Component, OnChanges, OnInit } from '@angular/core';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/cart.service';
import { BehaviorSubject } from 'rxjs';
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

  cartItemCount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
    });
  }
}
