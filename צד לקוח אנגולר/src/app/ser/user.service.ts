import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { user } from 'src/app/classes/user';
import { trip } from '../classes/trip';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  u:user=new user()
  manage:boolean=false
  besePath:string="https://localhost:7241/api/user/"
  constructor(public http:HttpClient)
  {}
  getAllUser():Observable<Array<user>>
  {
    return this.http.get<Array<user>>(`${this.besePath}GetAllUsers`)
  }
  getMailPass(mail:string,pass:string):Observable<user>{
    return this.http.get<user>(`${this.besePath}GetUserByMailAndPassword/${mail}/${pass}`)
  }
  addUser():Observable<number>
  {
    return this.http.post<number>(`${this.besePath}addUser`,this.u)
  }
  deletUser(u:number):Observable<boolean>
  {
    return this.http.delete<boolean>(`${this.besePath}DeleteUser/${u}`)
  }
  getAllTripToUser(id:number):Observable<Array<trip>>
  {
    debugger
    return this.http.get<Array<trip>>(`${this.besePath}GetAllTripToUser/${id}`)
  }
  updateUser():Observable<boolean>
  {
    return this.http.put<boolean>(`${this.besePath}UpdateUser`,this.u)
  }
 }

