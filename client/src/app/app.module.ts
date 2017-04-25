import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { validationService } from './core/validation/validation.service';

// Import the ButtonsModule...
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { ParticipantsComponent } from './participants/participants.component';

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
    RegisterationComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ButtonsModule, GridModule, routing
  ],
  providers: [ validationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
