import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { travelType } from '../classes/travelType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelTypeService {

  constructor(public http:HttpClient){}
  typeT:travelType=new travelType()
  besePath:string="https://localhost:7241/api/travelType/"
  getAllTravelT():Observable<Array<travelType>>
  {
    return this.http.get<Array<travelType>>(`${this.besePath}getAllTravelT/`)
  } 

}
