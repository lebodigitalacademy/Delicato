import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  loggedInUserDetails$:any;

  constructor(private loginService:LoginServiceService){
    this.loginService.loggedInUser$.subscribe(userDetails => {
      this.loggedInUserDetails$ = userDetails;
      console.log("BIG MOE"+this.loggedInUserDetails$)
    });
  }

}
