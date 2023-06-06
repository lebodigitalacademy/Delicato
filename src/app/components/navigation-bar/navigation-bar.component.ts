import { Component } from '@angular/core';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  cartIcon = faShoppingCart;
  profileIcon = faUser;
  searchIcon = faSearch;

}
