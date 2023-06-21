import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AboutComponent } from './about/about.component';

import { HomeContentComponent } from './home-content/home-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './card/card.component';


export const routes: Routes = [
  {path : 'viewProduct/:id', component : GetOneComponent},
  {path : '', component: AllCardsComponent},
  {path : 'about', component : AboutComponent},
  {path : 'cart', component: CartComponent},
  {path : 'profile', component: ProfileComponent}, 
  {path : 'login', component : LoginComponent},
  {path : 'checkout', component : CheckoutComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'cart', component: CartComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'card', component: CardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
