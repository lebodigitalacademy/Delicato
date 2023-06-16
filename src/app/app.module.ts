import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CardComponent } from './card/card.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';

//import { CartServiceService } from './services/cart-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    CardComponent,
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent,
    NavigationBarComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [CartServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

