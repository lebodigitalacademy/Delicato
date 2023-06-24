import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItemCount: number = 0;
  product: any;
  cartItems: any[] = [];
  totalPrice:number=0;
  form!: FormGroup;
  form2!:FormGroup;
  form2Filled!: Boolean;
  form1Filled!: Boolean;

  shippingSuccess(){
    Swal.fire('Shipping info successfully saved')
  }
  paymentSuccess(){
    Swal.fire('Payment info successfully saved')
  }

  constructor(private formBuilder: FormBuilder,private cartService: CartService, private service:ServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cartService.cartItems$.subscribe(products => {
      this.cartItemCount = products.length;
      this.cartItems = products;
    });

    this.cartService.cartItems$.subscribe(products => {
      this.cartItems = products;
    });

    this.cartService.cartPrice$.subscribe(price => {
      this.totalPrice = price;
    });



    this.form = this.formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      town: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern('^[0-9]{4}(?:-[0-9]{4})?$')]]

      
    });

    this.form2 = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }
  

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.form1Filled=true;
      this.shippingSuccess();
      this.form.reset();

     
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      console.log(this.form2.value)
      this.form2Filled=true;
      this.paymentSuccess();
      this.form2.reset();

     
    }
  }
isFormFilled(){

  if(this.form1Filled && this.form2Filled){
    
      Swal.fire({
        title: 'Thank you!',
        text: 'Your order has been placed',
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartService.resetCart();
          // User clicked "Yes" button, perform the routing
          this.router.navigate(['']); // Replace '/new-page' with the desired route
  
        }
      });
  
  
  }else{
    Swal.fire({
      icon:"error",
      title: 'Details not specified',
      text: 'Please enter your shipping and payment info',
    }).then((result) => {
      if (result.isConfirmed) {

      }
    });

  }
}
  


}


