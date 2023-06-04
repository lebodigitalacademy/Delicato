import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {
  items:any;
  // id?: number;

  constructor(private service:ServiceService, private router: Router) {}

  ngOnInit() {
    this.service.getEmployeeAll()
      .subscribe(data => {
        this.items = data;
        console.log(this.items);
      });
}

}
