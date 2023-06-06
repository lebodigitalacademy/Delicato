import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { GetOneComponent } from './get-one/get-one.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




export const routes: Routes = [
  {path : 'shop', component : AllCardsComponent},
  {path : 'viewProduct', component : GetOneComponent},
  {path : '', component: HomeContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
