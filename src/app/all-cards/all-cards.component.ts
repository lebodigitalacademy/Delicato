import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {
  proCat:any;
  items:any;
  searchText: any;
  // id?: number
  categories: string[] = ["electronics", "jewelery","women's clothing", "men's clothing"]; // Add your list of categories
  selectedCategory: any = '';
  filteredItems: any[] = [];
  


  constructor(private route: ActivatedRoute,private service:ServiceService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchItems();
  }


fetchItems(){
  this.service.getEmployeeAll()
      .subscribe(data => {
        this.items = data;
        console.log(this.items)
      this.selectedCategory='' });
}

filterItems() {
  if (this.selectedCategory) {
    this.filteredItems = this.items.filter((item: { category: string; }) => item.category === this.selectedCategory);
  } else {
    this.filteredItems = this.items;
  }
}

selectCategory(category: string) {
  this.selectedCategory = category;
  this.filterItems();
}

viewProduct(id: number) {
  this.router.navigate(['/viewProduct/' + id]);

}
}
