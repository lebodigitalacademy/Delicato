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
  product: any;
  id:any;

  constructor(private fakestore: ServiceService, private cartService: CartService,
    private router: Router, private route: ActivatedRoute){

      this.route.params.subscribe((params) => {
        this.id = params['id'];
      });
    
  }

  ngOnInit() {
    console.log("prudct id: " + this.id);
    if(this.id) {
      this.fakestore.getOneProduct(this.id).subscribe((data) =>{
        this.product = data;
      });
    }
    console.log(this.product);
    
     
  }

addToCart(item: any) {
  this.cartService.addToCart(item);
}
}
