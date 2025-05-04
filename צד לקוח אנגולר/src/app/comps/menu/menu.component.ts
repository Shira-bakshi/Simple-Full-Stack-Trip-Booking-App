import { Component } from '@angular/core';
import { UserService } from 'src/app/ser/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 
constructor(public user:UserService) {
   
}
}
