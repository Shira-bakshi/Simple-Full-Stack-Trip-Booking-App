import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-as-user',
  templateUrl: './as-user.component.html',
  styleUrls: ['./as-user.component.css']
})
export class AsUserComponent implements OnInit {
  constructor(public users:UserService){}
  ngOnInit(): void {
    this.users.getAllUser().subscribe(
      succ=> {this.luser=succ},
      err=>{alert("שגיאה בהצגת המשתמשים!")}
    )
  }
  luser:Array<user>=new Array<user>()
  
}
