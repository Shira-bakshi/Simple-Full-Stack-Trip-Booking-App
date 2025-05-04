import { Component } from '@angular/core';
import { bookingPlace } from 'src/app/classes/bookingPlace';
import { trip } from 'src/app/classes/trip';
import { user } from 'src/app/classes/user';
import { BookingPlaceService } from 'src/app/ser/booking-place.service';
import { TripService } from 'src/app/ser/trip.service';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.css']
})
export class PersonalAreaComponent  {

constructor(public trips:TripService,public bp:BookingPlaceService) {
  
}
lbp:Array<bookingPlace>=new Array<bookingPlace>()
}
