import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trip } from 'src/app/classes/trip';
import { user } from 'src/app/classes/user';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  // f:form= new form()
  mail:string=""
  pass:string=""
  constructor(public useres:UserService ,public r:Router) {}
  getMailPass(){
    if(localStorage.getItem("מייל")==this.mail && localStorage.getItem("סיסמא")==this.pass)
    {
        this.useres.manage=true
        this.r.navigate(['/ourTrip'])
    }
    else
    {
      this.useres.getMailPass(this.mail, this.pass).subscribe(
        succ => {
          if (succ && succ.UserCode != 0) {
            this.useres.u = succ;
            this.useres.manage = false;
            this.r.navigate(['/ourTrip']);
          } else {
            alert("אינך רשום במערכת!");
          }
        },
        err => {
          alert("אירעה שגיאה בשרת");
        }
      );
      
    }
  }
}
