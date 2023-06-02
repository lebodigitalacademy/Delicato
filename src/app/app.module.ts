import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeContentComponent } from './home-content/home-content.component';
import { CardComponent } from './card/card.component';
=======
import { GetOneComponent } from './get-one/get-one.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
>>>>>>> 89df6c3f1a5aa7acd22485f79ce9c50128718b6c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeContentComponent,
    CardComponent
=======
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent,
    NavigationBarComponent
>>>>>>> 89df6c3f1a5aa7acd22485f79ce9c50128718b6c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

