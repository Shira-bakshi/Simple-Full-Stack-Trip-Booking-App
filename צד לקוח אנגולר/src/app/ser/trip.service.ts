import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { trip } from 'src/app/classes/trip';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  besePath:string="https://localhost:7241/api/trip/"
  chooseTrip:trip=new trip()
  constructor(public http:HttpClient) { }
  
  getAllTrip():Observable<Array<trip>>
  {
    return this.http.get<Array<trip>>(`${this.besePath}getAllT`)
  }
  getById(id:number):Observable<trip>{
    return this.http.get<trip>(`${this.besePath}getByid/${id}`)
  }
  


}
