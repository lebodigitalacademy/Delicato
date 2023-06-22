import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
   
   

  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router: Router, private loginService:LoginService) {}

  ngOnInit() {

    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator]],
      password: ['', Validators.required]
    });

    console.log(this.loginForm.controls);
    console.log(this.loginForm.get('email'));
    
  }
 

  onSubmit() {
    


    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
  
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  
  this.loginService.makeAuthenticatedRequest(email, password);

  console.log(this.loginService);
  }

  // Custom email validator function
  emailValidator(control: any) {
    const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
   
    if (control.value && !emailRegex.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }
  get emailControl() {
    return this.loginForm.get('email');
  }

  
}
