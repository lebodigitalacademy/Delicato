import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string | undefined;
  searchResults: any[]; // Replace with the appropriate type for your product data
 
  constructor(private http: HttpClient) {
    this.searchResults = [];
  }
 
  search() {
    if (this.searchTerm) {
      this.getProducts(this.searchTerm).subscribe((results: any[]) => {
        this.searchResults = results;
      });
    } else {
      this.searchResults = [];
    }
  }
 
  getProducts(searchTerm: string): Observable<any[]> {
    const apiUrl = `https://fakestoreapi.com/products?search=${searchTerm}`; // Replace with your API endpoint
    return this.http.get<any[]>(apiUrl);
  }
  }
