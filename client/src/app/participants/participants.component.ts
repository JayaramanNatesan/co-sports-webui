import { Component, OnInit } from '@angular/core';
import { participants1 } from './participants';
import { participants2 } from './participants';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

private gridData: any[] = participants2;
  constructor() { 
  }

  ngOnInit() {
  }

}
