import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { corporateEventsSchemas } from '../core/data/schemas/corporateEventsSchemas';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

gridData: any;
routeSub: any;
eventId: any;

  constructor(private http: Http, private route: ActivatedRoute) { 
  }

  ngOnInit() {
     this.routeSub = this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
      console.log('event ID: ' + this.eventId);
      this.http.get('http://10.99.108.59:8080/SpringMVCHibernate/events/' + this.eventId + '/participant').map(data => data.json()).subscribe( data => this.gridData = data);
    })
  }

}
