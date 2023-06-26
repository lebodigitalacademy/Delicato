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


  // getProducts() {
  //   return this.products;
  // }

  // clearCart() {
  //   localStorage.removeItem('products');
  //   this.products = [];
  //   // this.cartQuantity = 0;
  // }

  // addtoCart(product : any){
  //   this.cartItemList.push(product);
  //   this.productsList.next(this.cartItemList); //.next to pass the cartItemList whenever is subscribed
  //   this.getTotalPrice();
  //   }

//get all the items amount total them to grandtotal
    // getTotalPrice(){
    //   let grandTotal = 0;
    //   //the a will have all the items inside the cartItemList
    //   this.cartItemList.map((a:any)=>{
    //   grandTotal += a.total;
    //   })
    //   }
// a method to remove 1 item from the cart
      // removeCartItem(product: any){
      //   this.cartItemList.map((a:any, index:any)=>{
      //   //check if the product id match with the id which is inside our list and if it match t will remove the item
      //   if(product.id=== a.id){
      //   this.cartItemList.splice(index,1);
      //   }
      //   })
      //   }

     
        
// A method to remove all the items from the cart/ to clear the cart
        // removeAllCart(){
        //   this.cartItemList = []
        //   this.productsList.next(this.cartItemList);
        //   }

        //   removeFromCart(product: any) {
        //     const index = this.products.indexOf(product);
        //     if (index !== -1) {
        //       this.products.splice(index, 1);
        //       localStorage.setItem('products', JSON.stringify(this.products));
        //     }
        //   }



        import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, take} from 'rxjs';
import { Product } from './interface/product';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  cartItemList : any =[]
  // productsList = new BehaviorSubject<any>([]);


  products: any[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  // private cartPriceSubject = new BehaviorSubject<number>(0);


  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  //shoppingCart$ = cartProducts BehaviorSubject<ShoppingCart>
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  private cartPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);



  cartCount$ = this.cartCountSubject.asObservable();
  // cartPrice$ = this.cartPriceSubject.asObservable();
  cartPrice$: Observable<number> = this.cartPriceSubject.asObservable();


  // cartItems = this.cartItemsSubject.asObservable();
  public cartItems$ = this.cartItemsSubject.asObservable();
  

  constructor(){}

  // addToCart(product: any) {
  //   console.log(product)
  //   const cartItem = this.cartItems.find(item => item.productId === product.productId);

  //   if (cartItem) {
  //     const totalPrice = this.cartItems.reduce((total, item) => total + item.price, 0);
  //     this.totalPriceSubject.next(totalPrice);
  //     cartItem.quantity++;
  //     this.countSubject.next(this.countSubject.value + 1); // Increase the countSubject value
  //     this.updateCartState();
  //   } else {
  //     this.cartItems.push({ ...product, quantity: 1 });
  //     this.countSubject.next(this.countSubject.value + 1); // Increase the countSubject value
  //     this.updateCartState();
  //   }

  //   this.updateCartState();
  // }

  // removeFromCart(product: any) {
  //   const index = this.cartItems.findIndex(item => item.productId === product.productId);

  //   if (index !== -1) {
  //     const removedItem = this.cartItems.splice(index, 1)[0];
  //     this.updateCartState();
  //   }
  // }

  //  updateCartState() {
  //   const quantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  //   const count = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  //   const totalPrice = this.cartItems.reduce((total, item) => total+item.price *item.quantity, 0);

  //   this.quantitySubject.next(quantity);
  //   this.countSubject.next(count);
  //   this.totalPriceSubject.next(totalPrice);
  //   this.cartItemsSubject.next([...this.cartItems]);
  // }

  // getCartItems(): any[] {
  //   return this.cartItems;
  // }

  // clearCart() {
  //   this.cartItems = [];
  //   this.updateCartState();
  // }
}












  
  
  
