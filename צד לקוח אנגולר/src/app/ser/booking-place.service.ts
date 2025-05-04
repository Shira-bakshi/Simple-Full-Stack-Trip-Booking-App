import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookingPlace } from '../classes/bookingPlace';
import { Observable } from 'rxjs';
import { trip } from '../classes/trip';

@Injectable({
  providedIn: 'root'
})
export class BookingPlaceService {

  constructor(public http:HttpClient){}

  besePath:string="https://localhost:7241/api/bookingPlace/"
  addInvateT(b:bookingPlace):Observable<number>
  {
    return this.http.post<number>('https://localhost:7241/api/bookingPlace/AddInviteToTrip',b)
  }
  deletbp(id:number):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.besePath}deletbp/${id}`)
  }
  GetAllInviteToTrip(id:number):Observable<Array<bookingPlace>>
  {
    return this.http.get<Array<bookingPlace>>(`${this.besePath}GetAllInviteToTrip/${id}`)
  }
 
}

