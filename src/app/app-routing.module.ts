import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeContentComponent } from './home-content/home-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllCardsComponent } from './all-cards/all-cards.component';


export const routes: Routes = [
  {path : 'viewProduct/:id', component : GetOneComponent},
  {path : '', component: AllCardsComponent},
  {path : 'about', component : AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
