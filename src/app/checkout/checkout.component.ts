import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  form!: FormGroup;
  form2!:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
      console.log(this.form.value);
      this.form.reset();
      // You can perform further actions with the form data
    } else {
      // Handle form validation errors
    }
  }
  onSubmit2() {
    if (this.form2.valid) {
      console.log(this.form2.value);
      this.form2.reset();
      // You can perform further actions with the form data
    } else {
      // Handle form validation errors
    }
  }
}

