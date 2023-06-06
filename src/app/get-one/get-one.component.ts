import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent {
  products: any;
  constructor(private fakestore: ServiceService, private cartService: CartService){}

  ngOnInit() {
      this.fakestore.getAllProducts().subscribe((res:any) =>{
        this.products=res;
        console.table(this.products);
      });
  }

addToCart(item: any) {
  this.cartService.addToCart(item);
}
}
