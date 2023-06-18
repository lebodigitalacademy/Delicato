import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    profileForm = new FormGroup({
        name: new FormGroup(''),
        surname: new FormGroup(''),
        email: new FormGroup(''),
        choosePassword: new FormGroup(''),
        retypePassword: new FormGroup(''),
    });


    onSubmit() {
        // Use EventEmitter with form value to notify the user of the registration
        console.warn(this.profileForm.value);
    }
    
}
