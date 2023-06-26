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

    this.cartService.totalPrice$.subscribe((price: number) => {
      this.totalPrice = price;
    });
     this.loginService.loggedInUser$.subscribe(userDetails => {
      this.loggedInUserDetails$ = userDetails;
      console.log("BIG MOE"+this.loggedInUserDetails$)
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
      console.log("HIHIHIHI"+this.form.value)
      this.service.addShipping(this.form.value,).subscribe({
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
      this.form1Filled=true;
      this.shippingSuccess();
      this.form.reset();

     
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      this.service.addPayment(this.form2.value).subscribe({
        next: (val: any) => {
        // once the item has been added, display the success notification and reset the form
        //  this.successNotification();
        // console.log('Successfully registered'+this.registerForm.value)
        //   this.registerForm.reset();
        console.log(this.form2.value)
        this.form2Filled=true;
        this.paymentSuccess();
        this.form2.reset();
        },
        
        error: (err: any) => {
          console.error (err);
        },
        
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


