import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
constructor(private TestService:TestService ){}
users:any;
ngOnInit(): void {
  this.fetchUsers();
}
fetchUsers(){
  this.TestService.getUsers().subscribe((user:any)=>{
    this.users=user;
    console.log("data received succesfullly");
  })
}
  title = 'login';
  name='Ines Riahi'
  role="formateur"
}
