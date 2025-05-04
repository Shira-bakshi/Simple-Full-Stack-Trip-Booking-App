import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { OurTripComponent } from './comps/our-trip/our-trip.component';
import { PersonalAreaComponent } from './comps/personal-area/personal-area.component';
import { DedaisTripComponent } from './comps/dedais-trip/dedais-trip.component';
import { AsUserComponent } from './comps/as-user/as-user.component';
import { AboutComponent } from './comps/about/about.component';
import { TripUserComponent } from './comps/trip-user/trip-user.component';

const routes: Routes = [
  {path: 'signIn', component: SignInComponent},
  {path: 'logIn', component: LogInComponent},
  {path: 'ourTrip', component: OurTripComponent},
  {path: 'pArea', component: PersonalAreaComponent},
  {path: 'dedaisTrip', component: DedaisTripComponent},
  {path: 'usUser', component: AsUserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tripUser', component: TripUserComponent},
  {path: 'updateD', component: LogInComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
