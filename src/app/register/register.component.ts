import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent implements OnInit {
  retypePass: string = 'none';

  //Inject Router Dependency
  constructor(private router: Router, private service :ServiceService) {}

  ngOnInit(): void {}

  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
    confirmPassword: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16)
    ]),
  });



  onSubmit() {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ mismatch: true });
      this.retypePass = 'mismatch';
    } else {
      this.retypePass = '';
    }

    if(this.registerForm.valid){
      this.service.createUser(this.registerForm.value).subscribe({
        next: (val: any) => {
        // once the item has been added, display the success notification and reset the form
        //  this.successNotification();
        this.router.navigate(['/login']);
        // console.log('Successfully registered'+this.registerForm.value)
        //   this.registerForm.reset();
        },
        
        error: (err: any) => {
          console.error (err);
        },
        
      });
    
  }
    
  }


  get firstName(): FormControl {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.registerForm.get('lastName') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }

  // Fires on button click
  onBtnClick() {
    // Navigate to /login page
    // this.router.navigate(['/login']);
  }
}