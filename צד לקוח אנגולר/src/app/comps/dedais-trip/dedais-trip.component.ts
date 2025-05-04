import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { bookingPlace } from 'src/app/classes/bookingPlace';
import { BookingPlaceService } from 'src/app/ser/booking-place.service';
import { TripService } from 'src/app/ser/trip.service';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-dedais-trip',
  templateUrl: './dedais-trip.component.html',
  styleUrls: ['./dedais-trip.component.css']
})
export class DedaisTripComponent {
constructor(public trips:TripService,public bookingP:BookingPlaceService,public user:UserService,public r:Router) {}
bookingPl:bookingPlace=new bookingPlace()
nPlace:number=0
n:number=0
f:boolean=false
success:number=0
invatPlace()
{
  this.f=true
}
chackInvateP()
  {
    if(this.user.u.UserCode==0)
    {
      this.r.navigate([`signIn`])
    }
    else
    {
      this.nPlace = this.trips.chooseTrip.NumberOfAvailablePlaces
      if (this.n<= this.nPlace)
      {
        this.addInvate()
        if(this.success>0)
        {
          alert("ההזמה בוצעה") 
        }
        this.f=false
      }
      else if(this.n>this.nPlace)
      {
        if(this.success<0)
        {
          alert("אין מספיק מקומות")
          this.f=true
        }
      }
    }
    
  }
  addInvate()
  {
    debugger
    this.bookingPl.UserCode=this.user.u.UserCode
    this.bookingPl.BookingDate=new Date()
    this.bookingPl.TripCode=this.trips.chooseTrip.TypeCode
    this.bookingPl.NumberOfPlaces=this.n
    this.bookingPl.FullName=this.user.u.Name+" "+this.user.u.Family
    this.bookingPl.TripDestination=this.trips.chooseTrip.TripDestination
    this.bookingPl.Date=this.trips.chooseTrip.Date
    this.bookingP.addInvateT(this.bookingPl).subscribe(
      succ=>{this.success=succ
        alert("ההזמה בוצעה") 
        this.r.navigate([`pArea`])

      },
      err=>{alert("ההזמנה נכשלה")}
    )
  }
  close()
  {
    
  }
}
