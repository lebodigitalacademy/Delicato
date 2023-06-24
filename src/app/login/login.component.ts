import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
   apiUrl = 'http://localhost:3000/users'; // URL for retrieving the list of registered users
   registeredUsers:any
   userName:any;


  constructor(private formBuilder: FormBuilder, private http:HttpClient,private router: Router, private loginService: LoginServiceService) {}


  isLoggedIn$ = this.loginService.isLoggedIn;

  ngOnInit() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      res => {
        this.registeredUsers = res;
        console.log(this.registeredUsers)
       
        });

    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator]],
      password: ['', Validators.required]
    });

    console.log(this.loginForm.controls);
    console.log(this.loginForm.get('email'));
    
  }
 

  onSubmit() {
    console.log(this.loginForm.value.email );

   
        const user = this.registeredUsers.find((registeredUser: any) => {
          return (
            registeredUser.email == this.loginForm.value.email &&
            registeredUser.password ==this.loginForm.value.password
          );
        });

    
        if (user) {
            this.loginService.login(this.userName);
     console.log("HI"+this.loginService.isLoggedIn)
          alert('Login Successful');
          
          this.loginForm.reset();
          this.router.navigate(['']);
        } else {
          alert('User not found');
        }
      // Get the list of registered users from the endpoint or service
     // Retrieve the list of registered users
    
      
    

    


    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

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

 

  logout() {
    this.loginService.logout();
  }



  
}
