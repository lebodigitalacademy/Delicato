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
  cartTotal: number = 0; // Declare the cartTotal property

  constructor(public cartService: CartService, private router: Router, private route: ActivatedRoute) { 
    this.cartService.getCartItems().subscribe(products => {
      
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

  }

  checkout(): void {
    this.router.navigate(['/login']);
  }

  redirectToAllCards() {
    this.router.navigate(['/all-cards']); 
  }

  // addToCart(product: Product, quantity: number): void {
  //   this.cartService.getCartItemById(product.id).subscribe(existingProduct => {
  //     if (existingProduct) {
  //       // If the product already exists in the cart, update the quantity
  //       const updatedQuantity = existingProduct.quantity + quantity;
  //       this.cartService.updateCartItemQuantity(existingProduct, updatedQuantity);
  //     } else {
  //       // If the product does not exist in the cart, add it
  //       this.cartService.addToCart(product, quantity);
  //     }
  //   });
  // }
    

  // addToCart(product: Product, quantity: number): void {
  //   this.cartService.getCartItemById(product.id).subscribe(existingProduct => {
  //     if (existingProduct) {
  //       // If the product already exists in the cart, update the quantity
  //       const updatedQuantity = existingProduct.quantity + quantity;
  //       this.cartService.updateCartItemQuantity(existingProduct, updatedQuantity);
  //     } else {
  //       // If the product does not exist in the cart, add it
  //       const newProduct: Product = {
  //         id: product.id,
  //         name: product.name,
  //         description: product.description,
  //         price: product.price,
  //         quantity: quantity,
  //         total: product.price * quantity, // Calculate the total based on price and quantity
  //         category: product.category,     // Include the category
  //         image: product.image              // Include the image
  //       };
  //       this.cartService.addToCart(newProduct);
  //     }
  //   });

  // }
  

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

  addtoCart(){}

//   incrementValue(fieldName: string): void {
//   const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
//   const currentVal = parseInt(inputElement.value, 10);

//   if (!isNaN(currentVal)) {
//     inputElement.value = String(currentVal + 1);
//     this.cartItemCount++; // Increment the cart item count
//   } else {
//     inputElement.value = '0';
//   }
// }

// decrementValue(fieldName: string): void {
//   const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
//   const currentVal = parseInt(inputElement.value, 10);

//   if (!isNaN(currentVal) && currentVal > 0) {
//     inputElement.value = String(currentVal - 1);
//     this.cartItemCount--; // Decrement the cart item count
//   } else {
//     inputElement.value = '0';
//   }
// }

updateCartTotal(): void {
  let cartTotal = 0;
  for (const product of this.cartItems) {
    cartTotal += product.price * product.quantity;
  }
  // You can assign the calculated cartTotal to a variable or update it as needed
  console.log('Cart Total:', cartTotal);
}

incrementValue(fieldName: string): void {
  const inputElement = document.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
  const currentVal = parseInt(inputElement.value, 10);

  if (!isNaN(currentVal)) {
    inputElement.value = String(currentVal + 1);
    this.cartItemCount++; // Increment the cart item count
    this.updateCartTotal(); // Update the cart total
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
    this.updateCartTotal(); // Update the cart total
  } else {
    inputElement.value = '0';
  }
}
}