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
  items1:any;
  searchText: any;
  // id?: number
  categories: string[] = ["fruit and vegetables", "Meat and Poultry","Cereal", "Bakery", "Frozen Food"]; // Add your list of categories
  selectedCategory: any = '';
  filteredItems: any[] = [];
  


  constructor(private route: ActivatedRoute,private service:ServiceService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.fetchItems();
  }


fetchItems(){
  this.service.getAllProducts()
      .subscribe(res => {
        this.items1 = res;
        this.items=this.items1.data;
        console.log(this.items1);
        console.log(this.items);
        console.log(this.items)
      this.selectedCategory='' });
}

filterItems() {
  if (this.selectedCategory) {
    this.filteredItems = this.items.category.filter((item: { category: string; }) => item.category === this.selectedCategory);
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
