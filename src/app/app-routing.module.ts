import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { FormProfileComponent } from './form-profile/form-profile.component';
import { FormPortfolioComponent } from './form-portfolio/form-portfolio.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' by default
  { path: 'home', component: HomeComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'formprofile', component: FormProfileComponent },
  { path: 'formportfolio/:id', component: FormPortfolioComponent },
  { path: 'display/:id', component: DisplayComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
