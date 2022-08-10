import { Component, OnInit } from '@angular/core';
 class formation {
  "done": boolean;
  "title":string;
  "dates": string;
  "nombrep": number;
  "eval":boolean;
}





@Component({
  selector: 'app-mesformations',
  templateUrl: './mesformations.component.html',
  styleUrls: ['./mesformations.component.scss']
})
export class MesformationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formations:formation[]=[
    {"done":false ,"title": "Les bases de l'info1" , "dates":"12 mars 1999" , "nombrep":12,"eval":false },
    {  "done":true ,"title": "Les bases de l'info2" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info3" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info4" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {"done":false ,"title": "Les bases de l'info1" , "dates":"12 mars 1999" , "nombrep":12,"eval":false },
    {  "done":true ,"title": "Les bases de l'info2" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info3" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info4" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false }
  ]

}
