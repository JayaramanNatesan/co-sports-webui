import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { DataServiceProvider } from './core/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataServiceProvider],
})
export class AppComponent {
  title = 'Welcome to Harman Sport Buzz..!';
  public dashboardData: any;
  
  constructor(private data: DataServiceProvider){
  
    this.data.getAllEventsData().subscribe( data => this.dashboardData = data);
  }
  
   onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }


}
