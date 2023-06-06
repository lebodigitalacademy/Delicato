export interface Product {
    // id: number;
    // name: string;
    // description: string;
    // price: number;
    // category: string;
    // image: string;
    "title": String,
    "price": Number,
    "description":String,
    "category": String,
    "image": String,
    "rating": {
      "rate": Number,
      "count": Number 
    }
}
