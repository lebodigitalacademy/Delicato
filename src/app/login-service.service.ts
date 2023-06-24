import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loggedIn$ = new BehaviorSubject<boolean>(false);
  private loggedInUserSubject = new BehaviorSubject<any>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  constructor(private http: HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn$.asObservable();
  }

  login(email: string, password: string) {
    // Perform login logic, e.g., making an API call
    // Once login is successful, set loggedIn$ to true
   
      // Make an API request to fetch the user data
      this.http.get<any>('http://localhost:3000/users').subscribe(users => {
        const matchingUser = users.find((user: { email: string; password: string; }) => user.email === email && user.password === password);
        if (matchingUser) {
          this.loggedInUserSubject.next(matchingUser);
        } else {
          this.loggedInUserSubject.next(null);
        }
      });
    
    this.loggedIn$.next(true);
  }

  logout() {
    // Perform logout logic, e.g., clearing session data
    // Once logout is completed, set loggedIn$ to false
    
      this.loggedInUserSubject.next(null);
    
    this.loggedIn$.next(false);
  }
}