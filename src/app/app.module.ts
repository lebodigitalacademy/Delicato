import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CartServiceService } from './services/cart-service.service';
import { ViewOneComponent } from './components/view-one/view-one.component';

@NgModule({
  declarations: [
    AppComponent,
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent,
    NavigationBarComponent,
    ViewOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
