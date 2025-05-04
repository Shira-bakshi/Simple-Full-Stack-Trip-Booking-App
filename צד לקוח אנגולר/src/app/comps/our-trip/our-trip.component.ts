import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { travelType } from 'src/app/classes/travelType';
import { trip } from 'src/app/classes/trip';
import { TravelTypeService } from 'src/app/ser/travel-type.service';
import { TripService } from 'src/app/ser/trip.service';

@Component({
  selector: 'app-our-trip',
  templateUrl: './our-trip.component.html',
  styleUrls: ['./our-trip.component.css']
})
export class OurTripComponent implements OnInit{
 
  constructor(public trips:TripService, public r:Router,public typeT:TravelTypeService) {}
  listTrip:Array<trip>=new Array<trip>()
  filerLT:Array<trip>=new Array<trip>()
  travelT:Array<travelType>=new Array<travelType>
  ngOnInit(): void {
    this.trips.getAllTrip().subscribe(
      succ=>
      {
        this.listTrip=succ
        this.listTrip=this.listTrip.filter(x=>new Date(x.Date!)>new Date())
        this.filerLT=this.listTrip
      },
      err=>{alert(err)}
    )
   this.typeT.getAllTravelT().subscribe(
    succ=>{this.travelT=succ},
    err=>{alert("err")}
   )    
   }

   filterTrip(t:string)

  {
    if(t!="הכל")
      this.filerLT=this.listTrip.filter(x=> x.TypeName==t)
    else
       this.filerLT=this.listTrip
    
  }
   moreD(t:trip){
    this.trips.chooseTrip=t
    this.r.navigate([`/dedaisTrip`])
  }
}
