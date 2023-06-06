import { Component } from '@angular/core';



@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {

  handleImageClick(category: string){
    // Handle the click event for the image

    console.log('Clicked category:', category);
     // Perform any desired actions based on the clicked category
  }
}
