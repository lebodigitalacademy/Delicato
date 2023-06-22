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
  items:any;

  //Inject Router Dependency
  constructor(private router: Router, private service:ServiceService) {}

  ngOnInit(
    
  ): void {
    this.service.getAllProducts()
      .subscribe(res => {
        this.items = res;
       });
  }

  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z].*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    choosePassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
    ]),
    retypePassword: new FormControl(''),
  });

  onSubmit() {
    if (this.ChoosePassword.value == this.RetypePassword.value) {
      console.log(this.registerForm.valid);
      this.retypePass = 'none';
    } else {
      this.retypePass = 'inline';
    }

    if(this.registerForm.valid){
      this.service.createUser(this.registerForm.value).subscribe({
        next: (val: any) => {
          // once the employee has been addedng, display the success notification and reset the form
        //  this.successNotification();
        console.log('Successfully registered'+this.registerForm.value)
          this.registerForm.reset();
        },
        // log a console error if the employee was not deleted
        error: (err: any) => {
          console.error (err);
        },
        
      });
    
  }
    
  }

  get Name(): FormControl {
    return this.registerForm.get('name') as FormControl;
  }

  get Surname(): FormControl {
    return this.registerForm.get('surname') as FormControl;
  }

  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get ChoosePassword(): FormControl {
    return this.registerForm.get('choosePassword') as FormControl;
  }

  get RetypePassword(): FormControl {
    return this.registerForm.get('retypePassword') as FormControl;
  }

  // Fires on button click
  onBtnClick() {
    // Navigate to /login page
    this.router.navigate(['/login']);
  }
}