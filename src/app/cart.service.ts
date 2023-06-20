// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   products: any[] = [];
//   cartQuantity = 0;
//   constructor() {
//     const local = localStorage.getItem('products');
//     const products = local ? JSON.parse(local) : [];
//     this.products = products.map((x: any) => ({
//       ...x,
//       price: +(x.price || 0),
//     }));
//     this.cartQuantity = products ? products.length : 0;
//   }
//   addToCart(product: any) {
//     this.products.push({
//       name: product.Name,
//       image: product.Attachment,
//       price: +product.PriceWithIVA,
//     });
//     this.cartQuantity = this.products ? this.products.length : 0;

//     localStorage.setItem('products', JSON.stringify(this.products));
//   }

//   getProducts() {
//     return this.products;
//   }

//   clearCart() {
//     localStorage.removeItem('products');
//     this.products = [];
//     this.cartQuantity = 0;
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './interface/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  cartItemList : any =[]
  productsList = new BehaviorSubject<any>([]);


  products: any[] = [];
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);


  // cartItems = this.cartItemsSubject.asObservable();
  public cartItems$ = this.cartItemsSubject.asObservable();

  constructor(){}

  addToCart(product: Product) {
    // const currentItems = this.cartProducts.value;
    // currentItems.push(product);
    // this.cartProducts.next(currentItems);
    const currentItems = this.cartItemsSubject.getValue();

    const isProductInCart = currentItems.some(item => item.productId === product.id);

    if (!isProductInCart) {
      const updatedItems = [...currentItems, product];
      this.cartItemsSubject.next(updatedItems);
    }
    // const updatedItems = [...currentItems, product];
    // this.cartItemsSubject.next(updatedItems);
  }

  getCartItems(): Observable<Product[]> {
    return this.cartProducts.asObservable();
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    localStorage.removeItem('products');
    this.products = [];
    // this.cartQuantity = 0;
  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productsList.next(this.cartItemList); //.next to pass the cartItemList whenever is subscribed
    this.getTotalPrice();
    }

//get all the items amount total them to grandtotal
    getTotalPrice(){
      let grandTotal = 0;
      //the a will have all the items inside the cartItemList
      this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
      })
      }
// a method to remove 1 item from the cart
      removeCartItem(product: any){
        this.cartItemList.map((a:any, index:any)=>{
        //check if the product id match with the id which is inside our list and if it match t will remove the item
        if(product.id=== a.id){
        this.cartItemList.splice(index,1);
        }
        })
        }
// A method to remove all the items from the cart/ to clear the cart
        removeAllCart(){
          this.cartItemList = []
          this.productsList.next(this.cartItemList);
          }

          removeFromCart(product: any) {
            const index = this.products.indexOf(product);
            if (index !== -1) {
              this.products.splice(index, 1);
              localStorage.setItem('products', JSON.stringify(this.products));
            }
          }
}
