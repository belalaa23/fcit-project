import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import{ MatInputModule } from  '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';  
import { ParticipantEvalComponent } from './_participant-eval/participant-eval.component';
import { FormationComponent } from './_formation/formation.component';
import { ToggleComponent } from './toggle/toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DoneComponent } from './done/done.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NavformateurComponent } from './navformateur/navformateur.component';
import { LoginComponent } from './login/login.component';
import { FormationplanifierComponent } from './admin/formationplanifier/formationplanifier.component';
import { FormationadminComponent } from './admin/formationadmin/formationadmin.component';
import { AjouteruneformationComponent } from './admin/ajouteruneformation/ajouteruneformation.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    PopUpComponent,
    ParticipantEvalComponent,
    ToggleComponent,
    FormationComponent,
    DoneComponent,
    NavformateurComponent,
    LoginComponent,
    FormationplanifierComponent,
    FormationadminComponent,
    AjouteruneformationComponent,
   
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    CommonModule,
    MatDatepickerModule,
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
