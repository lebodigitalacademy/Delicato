import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService) { 
    // this.cartService.getCartItems().subscribe(products => {
    //   // Do something with the cart items
    // });
  }

  ngOnInit(): void {
   
  }
  

  }


  
  

