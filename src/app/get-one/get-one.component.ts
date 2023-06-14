import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {
  TotalPrice!: number;
  product: any;
  product1:any;
  id: any;

  constructor(private fakestore: ServiceService, private cartService: CartService,
    private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    console.log("prudct id: " + this.id);
    if (this.id) {
      this.fakestore.getOneProduct(this.id).subscribe((res) => {
        this.product1 = res;
        this.product=this.product1.data;
        console.log(this.product)
      });
    }

    console.log(this.product);
    location.reload;
  }

  get products() {
    return this.cartService.products;
  }

  addToCart(product: any) {
    this.cartService.addToCart({ product });
    this.router.navigate(['/navigation-bar'], { skipLocationChange: true }).then(() => {
      this.router.navigate(['/viewProduct/' + this.id]);
    });
    this.router.navigate(['/shop'])
  }

  clear() {
    this.cartService.clearCart();
    this.ngOnInit;
  }
}