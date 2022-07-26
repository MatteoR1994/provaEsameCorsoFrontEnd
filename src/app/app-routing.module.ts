import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';
import { BeersComponent } from './components/beers/beers.component';
import { IntroComponent } from './components/intro/intro.component';

const routes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: 'beers', component: BeersComponent },
  { path: 'details/:id', component: BeerDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
