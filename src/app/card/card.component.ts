// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent {
  
// }


import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponent implements OnInit {
  products: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

  removeFromCart(product: any) {
    // Implement the logic to remove the product from the cart
  }
}
