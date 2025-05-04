import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trip } from 'src/app/classes/trip';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  success:number=0 
  b:boolean=false
  lTU:Array<trip>=new Array<trip>
  up:boolean=false
constructor(public users:UserService, public r:Router) {}
  ngOnInit(): void {
    if(this.r.url=="/updateD")
    {
      this.up=true
      this.users.u={...this.users.u}
    }
  }
deletUser()
 {
  this.users.getAllTripToUser(this.users.u.UserCode).subscribe(
    succ=>{ this.lTU==succ
   },
    err=>{}
  )
  var list=this.lTU.find(x=>x.Date!>new Date())
    this.users.deletUser(this.users.u.UserCode).subscribe(
      secc=>{this.b=secc
        alert("המשתמש הוסר בהצלחה")
      this.users.u=new user},
      err=>{"יש לך טיולים מוזמנים לעתיד..."}
    )
  }  
 
addUser()
{
  if(!this.up)
  {
    this.users.addUser().subscribe(
    succ=>{this.success=succ
      this.r.navigate([`/ourTrip`])},
    err=>{}
  )
  }
  else{
    this.users.addUser().subscribe(
    succ=>{},
    err=>{})
  }
  }
}
