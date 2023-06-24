// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   // products: any[] = [];
//   grandTotal !: number;

//   products: any[] = [];
//   TotalPrice!: number;
//   // product: any;
//   product1:any;
//   id: any;

//   constructor(private cartService:CartService) {}


//   ngOnInit(): void {
//     this.products = this.cartService.getProducts()
//     this.getTotalPrice();
//   }

//   getTotalPrice(): void {
//     this.grandTotal = this.products.reduce((total: number, product: any) => {
//       return total + (product.price || 0);
//     }, 0);
//   }

//   removeItem(product: any): void {
//     // Implement the logic to remove the product from the cart
//   }

//   clearCart(): void {
//     // Implement the logic to clear the cart
//   }




// }




import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: any;
  grandTotal: number = 0;
  product: any;
  id: any;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute,
    private fakestore: ServiceService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  // ngOnInit() {
  //   this.products = this.cartService.getProducts();
  //   this.calculateGrandTotal();

  //   if (this.id) {
  //     this.service.getOneProduct(this.id).subscribe((res) => {
  //       this.product = res;
  //       console.log(this.product);
  //       this.addToCart(this.product);
  //     });
  //   }
  // }

  ngOnInit() {
    const productId = 2; // Example product ID
    this.fakestore.getOneProduct(productId).subscribe(
      (response) => {
        this.product = response;
        console.log(this.product);
        // Access the properties of the retrieved product as needed
      },
      (error) => {
        console.error(error);
      }
    );
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.products.reduce(
      (total: number, product: any) => total + (product.price || 0),
      0
    );
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    this.products = this.cartService.getProducts();
    this.calculateGrandTotal();
  }

  removeItem(product: any): void {
    this.cartService.removeFromCart(product);
    this.products = this.cartService.getProducts();
    this.calculateGrandTotal();
  }

  clearCart(): void {
    this.cartService.resetCart;
  }
}

