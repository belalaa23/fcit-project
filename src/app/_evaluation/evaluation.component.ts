import { Component, OnInit } from '@angular/core';
class participant {
  "name": string;
  "identifiant":number;
  "etat": string;
  "dmaj": string;
}

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  participants:participant[]=[
    {"name":"foulen ben foulen" ,"identifiant": 741852 , "dmaj":"12 mars 1999" , "etat":"non évaluer" },
    {  "name":"patrique pastel" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"non évaluer" },
    {  "name":"roberto regro" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"évaluer" },
    {  "name":"rafayel rocher" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"évaluer"  },
    {"name":"foulen ben foulen" ,"identifiant": 741852 , "dmaj":"12 mars 1999" , "etat":"évaluer" },
    {  "name":"patrique pastel" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"non évaluer" },
    {  "name":"roberto regro" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"évaluer" },
    {  "name":"rafayel rocher" ,"identifiant": 954126 , "dmaj":"12 mars 1999" , "etat":"évaluer"  }
  ]
evaluation(){
let i=0;
let json=JSON.parse( JSON.stringify(this.participants)  , (k,v)=>{
    if(k === "etat"){
      if(v ==="évaluer"){
        i+=1;
      }
    }
  })
  return i ;
}

}
