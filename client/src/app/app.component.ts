import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome to Harman Sport Buzz..!';
  
  constructor(){
  }
  
   onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }


}
