import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetOneComponent } from './get-one/get-one.component';
import { AllSidePanelComponent } from './all-side-panel/all-side-panel.component';
import { AllCardsComponent } from './all-cards/all-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    GetOneComponent,
    AllSidePanelComponent,
    AllCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
