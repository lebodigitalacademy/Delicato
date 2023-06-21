import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  retypePass: string = 'none';

  //Inject Router Dependency
  constructor(private router: Router) {}

  ngOnInit(): void {}

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