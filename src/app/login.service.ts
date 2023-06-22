import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/users/login';
  private authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTQ0NDA3MzJlNTkzNjJhNTFiYTRlNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODc0NTUyODksImV4cCI6MTY4NzcxNDQ4OX0.ka_XdtqGdLlXD1CXGKQTHvgRkwg0dvLL7HdRPp6XhyQ";

  constructor(private http: HttpClient) { }

  makeAuthenticatedRequest(email: string, password: string): void {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);
    const payload = { email, password };
  
    this.http.post<any>(this.apiUrl, payload, { headers }).subscribe(
      (response) => {
        // Handle the successful response
        console.log('Response:', response);
        // Store the user details or perform any other necessary actions
        const user = response.user;
        // ...
      },
      (error) => {
        // Handle the error
        console.error('Error:', error);
      }
    );
  }
  
}
