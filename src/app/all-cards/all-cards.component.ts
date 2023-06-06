import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {
  proCat:any;
  items:any;
  // id?: number
  categories: string[] = ["electronics", "jewelery","women's clothing", "men's clothing"]; // Add your list of categories
  selectedCategory: any = '';
  filteredItems: any[] = [];

  constructor(private route: ActivatedRoute,private service:ServiceService, private router: Router) {}

  ngOnInit() {
    this.fetchItems();
    this.route.params.subscribe(params => {
      this.proCat = params["category"];
      if (this.proCat!=null) {
        this.selectCategory(this.proCat);
      }
      
     })
   
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

viewOne(id:any){
  console.log('The product id is'+id)
  this.router.navigate(['/viewProduct/'])

}
}
