import { Component, OnInit } from '@angular/core';
import { bookingPlace } from '../../classes/bookingPlace';
import { BookingPlaceService } from '../../ser/booking-place.service';
import { UserService } from '../../ser/user.service';
import { trip } from 'src/app/classes/trip';

@Component({
  selector: 'app-trip-user',
  templateUrl: './trip-user.component.html',
  styleUrls: ['./trip-user.component.css']
})
export class TripUserComponent implements OnInit {
constructor(public bp:BookingPlaceService,public user:UserService){}
ngOnInit(): void {
  if (this.user.u)
  {      
    console.log(this.user.u.UserCode)

    debugger
    this.user.getAllTripToUser(this.user.u.UserCode).subscribe(
    succ=>{this.lbp=succ
    this.FLbp=this.lbp
      console.log(this.FLbp[1]);

  },
    err=>{alert("err")}
    
  )
  }

}
lbp:Array<trip>=new Array<trip>()
FLbp:Array<trip>=new Array<trip>()
d:Date=new Date()
deletBp(id:number){
  debugger
  this.bp.deletbp(id).subscribe(
    succ=>{this.user.getAllTripToUser(this.user.u.UserCode).subscribe(
      succ=>{this.lbp=succ},
      err=>{alert("err")})},
    err=>{alert("המחיקה נכשלה")}
  )
}
filterDate(str:string)
{
  // if(str="עבר")
  // {
  //   this.FLbp=this.lbp.filter(x=>new Date(x.Date!)<this.d)
  // }
  // else{
  //   this.FLbp=this.lbp.filter(x=>new Date(x.Date!)>this.d)
  // }
}
}
