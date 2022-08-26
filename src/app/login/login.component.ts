import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
class user{
  "id":number;
  "mail":string;
  "password":string;
  "role":string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;
  login="";
  password="";
  users:user[]=[];
  constructor(public test:TestService,private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    this.getallUsers();
  }
  getallUsers(){
    this.test.getUsers().subscribe((data:any)=>{
      console.log(data)
      this.users=data;
    })
  }
  logit(){
    console.log(this.login)
    let role="";
    let trouve=false;
    this.users.forEach((user)=>{
      console.log("saluet");
      if(user.mail === this.login){
          if ( user.password === this.password){
              trouve=true;
              role=user.role;
          }
      }
   
    })

    if(trouve){
      console.log("welcome "+this.login);
      if(role==="admin"){
        this.router.navigate(['admin'],{relativeTo: this.route});
      }else if(role==="formateur"){
        this.router.navigate(['formateur'],{relativeTo: this.route});
      }
      
    }
  }
}
