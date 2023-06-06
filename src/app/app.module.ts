import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { CardComponent } from './card/card.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
// import { FontAwesomeModule } from '@fotawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeContentComponent,
    CardComponent,
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent,
    NavigationBarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

