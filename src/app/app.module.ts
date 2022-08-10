import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import{ MatInputModule } from  '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InputfieldComponent } from './inputfield/inputfield.component';
import { MatButtonModule } from '@angular/material/button';
import { PopUpComponent } from './pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavadminComponent } from './_navadmin/navadmin.component';
import { ParticipantEvalComponent } from './_participant-eval/participant-eval.component';
import { FormationComponent } from './_formation/formation.component';
import { ToggleComponent } from './toggle/toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DoneComponent } from './done/done.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    InputfieldComponent,
    routingcomponents,
    PopUpComponent,
    NavadminComponent,
    ParticipantEvalComponent,
    FormationComponent,
    ToggleComponent,
    DoneComponent,
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
    HttpClientModule
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
