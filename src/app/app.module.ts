import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
<<<<<<< HEAD
=======
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
>>>>>>> e6bba707c69507dca2e01689844bdfcf88c1c1c6

@NgModule({
  declarations: [
    AppComponent,
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
