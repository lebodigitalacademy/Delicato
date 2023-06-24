import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private userName$ = new BehaviorSubject<string>('');

  get isLoggedIn() {
    return this.loggedIn$.asObservable();
  }

   userNameObservable=this.userName$.asObservable();
  

  login(username:any) {
    // Perform login logic, e.g., making an API call
    // Once login is successful, set loggedIn$ to true
    this.userName$.next(username);
    this.loggedIn$.next(true);
  }

  logout() {
    // Perform logout logic, e.g., clearing session data
    // Once logout is completed, set loggedIn$ to false
    this.loggedIn$.next(false);
  }
}