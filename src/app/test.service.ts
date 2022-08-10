import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 uri="http://localhost:5001/users";
  constructor(private http:HttpClient) {}
    
  public  getUsers(){
      return this.http.get(`${this.uri}/orm`)
    }
   
}
