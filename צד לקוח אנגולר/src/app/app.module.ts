import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './comps/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './comps/menu/menu.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { OurTripComponent } from './comps/our-trip/our-trip.component';
import { PersonalAreaComponent } from './comps/personal-area/personal-area.component';
import { DedaisTripComponent } from './comps/dedais-trip/dedais-trip.component';
import { TripUserComponent } from './comps/trip-user/trip-user.component';
import { AsUserComponent } from './comps/as-user/as-user.component';
import { AboutComponent } from './comps/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MenuComponent,
    LogInComponent,
    OurTripComponent,
    PersonalAreaComponent,
    DedaisTripComponent,
    TripUserComponent,
    AsUserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
