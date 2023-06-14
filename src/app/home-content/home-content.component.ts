import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent {
  check:boolean=false;
  items1:any;
  items:any;
  // id?: number
  categories: string[] = ["Fruit and Veg", "Meat and Poultry","Cereal", "Bakery", "Frozen Food"]; // Add your list of categories
  selectedCategory: any = '';
  filteredItems: any[] = [];

  constructor(private route: ActivatedRoute,private service:ServiceService, private router: Router) {}

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
    this.filteredItems = [...this.items.filter((item: { category: { name: string | any[]; }; }) => item.category.name.includes(this.selectedCategory))];
    this.check=true;
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