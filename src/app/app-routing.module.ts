import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { GetOneComponent } from './get-one/get-one.component';
import { ViewOneComponent } from './components/view-one/view-one.component';

export const routes: Routes = [{path : 'shop', component : AllCardsComponent},
{path : 'viewProduct', component : GetOneComponent},
{path : 'view', component : ViewOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
