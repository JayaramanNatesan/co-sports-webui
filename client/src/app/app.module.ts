import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { routing } from './app.routes';

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
    HttpModule,
    ButtonsModule, GridModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
