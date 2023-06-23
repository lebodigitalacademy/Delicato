import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../interface/product';

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
  public quantity: number = 1;

  constructor(private service: ServiceService, private cartService: CartService,
    private router: Router, private route: ActivatedRoute) {

    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    console.log("product id: " + this.id);
    if (this.id) {
      this.service.getOneProduct(this.id).subscribe((res) => {
        this.product1 = res;
        this.product=this.product1.data;
        console.log(this.product)
      });
    }

    console.log(this.product);
    location.reload;
  }

  // get products() {
  //   return this.cartService.products;
  // }

  // addToCart(product: Product): void {
  //   this.cartService.addToCart(product);
  // }

  addToCart(product: Product) :void {
    this.cartService.addToCart(product);
  }

}