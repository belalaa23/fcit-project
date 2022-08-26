import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
 formation="http://localhost:5001/formation";
 participant="http://localhost:5001/participant";
 users="http://localhost:5001/users";
  constructor(private http:HttpClient) {}
  public getUsers(){
    return this.http.get(`${this.users}/orm`)
  }
  public  getFormation(){
      return this.http.get(`${this.formation}/orm`);
    }
 public getOneFormation(id: any){
  return this.http.get(`${this.formation}/orm/${id}`);
 }
  public getParticipant(id: any){
    return this.http.get(`${this.participant}/orm/${id}`)
  } 
  public Evaluer(id:any){
    return this.http.get(`${this.participant}/update/${id}`)
  }
  public evaluationTerminer(id:any){
    return this.http.get(`${this.formation}/update/${id}`)
  }
}
