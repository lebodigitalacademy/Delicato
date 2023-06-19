import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    profileForm: any;
    // profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.profileForm = this.fb.group({
      // Define your form controls and validation rules here
    // });
  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      surname: [''],
      email: ['', [Validators.required, Validators.email]],
      choosePassword: ['', Validators.minLength(6)],
      retypePassword: ['']
    });
  }

    onSubmit() {
        // Use EventEmitter with form value to notify the user of the registration
        // Handle form submission logic here
        // console.warn(this.profileForm.value);
    }
    
}
