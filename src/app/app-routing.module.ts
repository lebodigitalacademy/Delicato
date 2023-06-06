import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { GetOneComponent } from './get-one/get-one.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ViewOneComponent } from './components/view-one/view-one.component';

export const routes: Routes = [
  {path : 'shop', component : AllCardsComponent},
  {path : 'viewProduct', component : GetOneComponent},
{path : 'view', component : ViewOneComponent },
  {path : '', component: HomeContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
