import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  






  products: any[] = [];
  cartItemCount: number = 0;
  product: any;
  cartItems: Product[] = [];

  constructor(public cartService: CartService, private router: Router, private route: ActivatedRoute) { 
    this.cartService.getCartItems().subscribe(products => {
      // Do something with the cart items
    });
  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
      this.cartItems = products;
    });

    this.cartService.cartItems$.subscribe(products => {
      this.cartItems = products;
    });

    // this.products = this.cartService.getProducts();
  }

  checkout(): void {
    this.router.navigate(['/login']);
  }

   home(): void {
    this.router.navigate(['/all-cards']);
  }

  addToCart(product: Product, quantity: number): void {
    this.cartService.getCartItemById(product.id).subscribe(existingProduct => {
      if (existingProduct) {
        // If the product already exists in the cart, update the quantity
        const updatedQuantity = existingProduct.quantity + quantity;
        this.cartService.updateCartItemQuantity(existingProduct, updatedQuantity);
      } else {
        // If the product does not exist in the cart, add it
        this.cartService.addToCart(product, quantity);
      }
    });
  }
  

  removeCartItem(product: Product): void {
    this.cartService.removeCartItem(product).subscribe(
      () => {
        console.log('Product removed from cart.');
      },
      (error) => {
        console.error(error);
      }
    );
  }

  incrementValue(fieldName: string): void {
  const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
  const currentVal = parseInt(inputElement.value, 10);

  if (!isNaN(currentVal)) {
    inputElement.value = String(currentVal + 1);
    this.cartItemCount++; // Increment the cart item count
  } else {
    inputElement.value = '0';
  }
}

decrementValue(fieldName: string): void {
  const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
  const currentVal = parseInt(inputElement.value, 10);

  if (!isNaN(currentVal) && currentVal > 0) {
    inputElement.value = String(currentVal - 1);
    this.cartItemCount--; // Decrement the cart item count
  } else {
    inputElement.value = '0';
  }
}
 
}