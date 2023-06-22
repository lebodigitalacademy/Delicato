import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';

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

  shippingSuccess(){
    Swal.fire('Shipping info successfully saved')
  }
  paymentSuccess(){
    Swal.fire('Payment info successfully saved')
  }

  constructor(private formBuilder: FormBuilder,private cartService: CartService, private service:ServiceService) { }

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

      this.service.addShipping(this.form.value).subscribe({
        next: (val: any) => {
          // once the employee has been addedng, display the success notification and reset the form
          this.shippingSuccess();
          this.form.reset();
          
        },
        // log a console error if the employee was not deleted
        error: (err: any) => {
          console.error (err);
        },
        
      });
      console.log(this.form.value);
      this.form.reset();
      // You can perform further actions with the form data
    } else {
      // Handle form validation errors
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      console.log(this.form2.value)

      this.service.addPayment(this.form2.value).subscribe({
        next: (val: any) => {
          // once the employee has been addedng, display the success notification and reset the form
          this.paymentSuccess();
          this.form2.reset();
          
        },
        // log a console error if the employee was not deleted
        error: (err: any) => {
          console.error (err);
        },
        
      });
      console.log(this.form2.value);
      this.form2.reset();
      // You can perform further actions with the form data
    } else {
      // Handle form validation errors
    }
  }

  displayOrderSuccess(){
    Swal.fire('Thank you! Your Order has been placed')
  }


}


