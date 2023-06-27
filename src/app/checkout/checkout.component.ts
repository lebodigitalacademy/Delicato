import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { ServiceService } from '../service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

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
  loggedInUserDetails$:any;

  shippingSuccess(){
    Swal.fire('Shipping info successfully saved')
  }
  paymentSuccess(){
    Swal.fire('Payment info successfully saved')
  }

  constructor(private formBuilder: FormBuilder,private cartService: CartService, private service:ServiceService,
    private route: ActivatedRoute,
    private router: Router, private loginService:LoginServiceService) { }

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
  

/*   onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.shippingSuccess();
      this.form.reset();
      // You can perform further actions with the form data
    } else {
      // Handle form validation errors
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      console.log(this.form.value)
      this.paymentSuccess();
      this.form.reset();

     
    }
  }

  displayOrderSuccess(){
    Swal.fire({
      title: 'Confirmation',
      text: 'Your order has been placed',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.resetCart();
        // User clicked "Yes" button, perform the routing
        this.router.navigate(['']); // Replace '/new-page' with the desired route

      } else {
        // User clicked "No" button, do nothing or handle accordingly
      }
    });


}
} */
isFormFilled(){
  

  const data = {
    totalPrice: this.totalPrice,
    customerID: this.loggedInUserDetails$.id
  };
  console.log('dfgsfgsfgAwe'+this.totalPrice+this.loggedInUserDetails$.id);

  this.service.addOrder(data).subscribe({
    
    next: (val: any) => {
      // once the employee has been addedng, display the success notification and reset the form
      const orderID=val.id;
      console.log('orderID'+orderID)

      Swal.fire({
        title: 'Thank you '+this.loggedInUserDetails$.name,
        text: 'Your order has been placed, order number is '+orderID+' and total order amount is R '+this.totalPrice,
      }).then((result) => {
        if (result.isConfirmed) {
          this.cartService.clearCart();
          // User clicked "Yes" button, perform the routing
          this.router.navigate(['']); // Replace '/new-page' with the desired route
  
        }
      });
    },
    // log a console error if the employee was not deleted
    error: (err: any) => {
      console.error (err);
    },
    
  });


    
  
  
 

  
}
  


}

