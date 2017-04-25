import { Component, OnInit } from '@angular/core';
import { DataServiceProvider } from '../core/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DataServiceProvider]
})
export class DashboardComponent implements OnInit {
  public dashboardData: any;
  constructor(private data: DataServiceProvider){

  }

  ngOnInit() {
    this.data.getAllEventsData().subscribe( data => this.dashboardData = data);
  }

}
