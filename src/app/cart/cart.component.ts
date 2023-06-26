import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/interface/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemCount: number = 0;
  product: any;
  cartItems: Product[] = [];

  constructor(private cartService: CartService) { 
    // commented for merging this.cartService.getCartItems().subscribe(products => {
      // Do something with the cart items
    // });
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
      this.cartItems = products;
    });


    this.cartService.cartItems$.subscribe(products => {
      this.cartItems = products;
    });

  //   if (this.id) {
  //     this.service.getOneProduct(this.id).subscribe((res) => {
  //       this.product = res;
  //       console.log(this.product);
  //       this.addToCart(this.product);
  //     });
  //   }
  // }

  //  COMMENTED FOR MERGING ngOnInit() {
  //   const productId = 2; // Example product ID
  //   this.fakestore.getOneProduct(productId).subscribe(
  //     (response) => {
  //       this.product = response;
  //       console.log(this.product);
  //       // Access the properties of the retrieved product as needed
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  // COMMENTED FOR MERGING calculateGrandTotal(): void {
  //   this.grandTotal = this.products.reduce(
  //     (total: number, product: any) => total + (product.price || 0),
  //     0
  //   );
  // }

  // addToCart(product: any): void {
  //   this.cartService.addToCart(product);
  //   this.products = this.cartService.getCartItems();
  //   this.calculateGrandTotal();
  // }

  // removeItem(product: any): void {
  //   this.cartService.removeFromCart(product);
  //   this.products = this.cartService.getCartItems();
  //   this.calculateGrandTotal();
  // }

  // clearCart(): void {
  //   this.cartService.clearCart;

  }

  // removeItem(product: any): void {
  //   this.cartService.removeFromCart(product);
  //   this.products = this.cartService.getCartItems();
  //   this.calculateGrandTotal();
  // }

  // clearCart(): void {
  //   this.cartService.clearCart;
  // }
}
