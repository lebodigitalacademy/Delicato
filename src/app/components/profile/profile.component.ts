import { Component } from '@angular/core';
import { LoginServiceService } from 'src/app/login-service.service';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  loggedInUserDetails$:any;
  id!: number;

  constructor(private loginService:LoginServiceService, private service:ServiceService){
    this.loginService.loggedInUser$.subscribe(userDetails => {
      this.loggedInUserDetails$ = userDetails;
      console.log("BIG MOE"+this.loggedInUserDetails$)
    });
  }

  updateUser(): void {
    this.service.updateUser(this.id, this.loggedInUserDetails$)
    .toPromise()
      .then((updatedUser: any) => {
        console.log('User updated:', updatedUser);
        // Perform any necessary actions after the update is successful
      })
      .catch((error: any) => {
        console.error('Error updating user:', error);
        // Handle the error appropriately
      });
  }

}
