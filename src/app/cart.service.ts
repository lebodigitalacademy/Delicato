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
  
  private cartProducts: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  private cartPriceSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);



  cartCount$ = this.cartCountSubject.asObservable();
  // cartPrice$ = this.cartPriceSubject.asObservable();
  cartPrice$: Observable<number> = this.cartPriceSubject.asObservable();


  // cartItems = this.cartItemsSubject.asObservable();
  public cartItems$ = this.cartItemsSubject.asObservable();
  

  constructor(){}

  addToCart(product: any) {
    // const currentItems = this.cartProducts.value;
    // currentItems.push(product);
    // this.cartProducts.next(currentItems);
    const currentItems = this.cartItemsSubject.getValue();

    const isProductInCart = currentItems.some(item => item.productId === product.productId);
    console.log('HI'+product.productId)

    if (!isProductInCart) {
      const updatedItems = [...currentItems, product];
      const count = this.products.reduce((total, item) => total + item.quantity, 0);
      this.cartPriceSubject.next(this.cartPriceSubject.value + product.price);
      


      this.cartCountSubject.next(count);
      this.cartItemsSubject.next(updatedItems);
    }

  }


getCartItemById(productId: number): Observable<Product | undefined> {
  return this.cartItems$.pipe(
    map(items => items.find(item => item.id === productId))
  );
}

getCartItems(): Observable<Product[]> {
  return this.cartProducts.asObservable();
}

  updateCartItemQuantity(product: Product, quantity: number): void {
    const currentItems = this.cartItemsSubject.getValue();
    const productIndex = currentItems.findIndex(item => item.id === product.id);

    if (productIndex !== -1) {
      const updatedProduct = { ...product, quantity };
      currentItems[productIndex] = updatedProduct;
      this.cartItemsSubject.next(currentItems);
    }
  }


  removeCartItem(product: Product): Observable<void> {
    return new Observable<void>((observer) => {
      this.cartItems$.pipe(
        take(1),
        map(items => items.filter(item => item.id !== product.id)),
      ).subscribe(updatedItems => {
        this.cartItemsSubject.next(updatedItems);
        observer.next();
        observer.complete();
      });
    });
  }

  getProducts() {
    return this.products;
  }

  removeFromCart(product: any): void {
    const currentItems = this.cartItemsSubject.getValue();
    const updatedItems = currentItems.filter(item => item.productId !== product.productId);
    this.cartItemsSubject.next(updatedItems);
  }

  updateQuantity(item: any) {
    const existingItem = this.products.find(i => i.productId === item.productId);

    if (existingItem) {
      existingItem.quantity = item.quantity;
    }
  }

  // updateCart(cartItems: any[]) {
  //   let totalPrice = 0;
  //   let totalCount = 0;

  //   for (const item of cartItems) {
  //     totalPrice += item.price * item.quantity;
  //     totalCount += item.quantity;
  //   }

  //   this.cartPriceSubject.next(totalPrice);
  //   this.cartCountSubject.next(totalCount);
  // }

  updateCart(cartItems: any[]) {
    let totalPrice = 0;
    let totalCount = 0;
  
    for (const item of cartItems) {
      totalPrice += item.price;
    }
  
    this.cartPriceSubject.next(totalPrice);
    this.cartCountSubject.next(totalCount);
  }
  

  resetCart() {
    this.cartItemsSubject.next([]);
    this.cartCountSubject.next(0);
    this.cartPriceSubject.next(0);
  }
}





  
  
  
