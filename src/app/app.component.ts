import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Delicato';
  performSearch(query: string) {
    console.log('Search query:', query);
    // Perform search logic here
  }
}
