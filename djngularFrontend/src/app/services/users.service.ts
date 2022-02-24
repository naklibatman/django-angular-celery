import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

const baseUrlApp1 = 'http://localhost:8000/app1/api/users';
const baseUrlApp2 = 'http://localhost:8000/app2/home/'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(baseUrlApp1)
  }

  create(data : any): Observable<any> {
    return this.http.post(baseUrlApp1, data)
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrlApp1)
  }

  

  
}
