import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationComponent } from './_evaluation/evaluation.component';
import { FormationsComponent } from './_mes formations router/formations.component';
import { MesformationsComponent } from './_mesformations/mesformations.component';
import { PageacceuilComponent } from './_pageacceuil/pageacceuil.component';
import { ProfileformateurComponent } from './_profileformateur/profileformateur.component';

 
const routes: Routes = [
  {path:'profile',component:ProfileformateurComponent},
  {path:'mes formations',component:FormationsComponent,
    children:[
      {path:'',component:MesformationsComponent},
      {path:'evaluation',component:EvaluationComponent},
    ]
},
  {path:'acceuil',component:PageacceuilComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents= [ProfileformateurComponent,MesformationsComponent,PageacceuilComponent,EvaluationComponent,FormationsComponent]