import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validationService } from '../core/validation/validation.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  complexForm : FormGroup;

  private routeSub: any;
  public eventId: any;
  public postData: any;


  constructor(fb: FormBuilder, private route: ActivatedRoute, private http: Http){
    this.complexForm = fb.group({
      'employeeName' : ['', Validators.required],
      'mobileNo': ['',  Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10), validationService.phoneNumberValidator])],
      'employeeId' : [null, Validators.required],
     
    })
    this.complexForm.valueChanges.subscribe( (form: any) => {
    }
    );
  }

  submitForm(value: any){
    this.http
    .post('http://10.91.232.129:8080/SpringMVCHibernate/rest/events/' + this.eventId + '/registration', value)
      .subscribe(data => { 
          console.log('success...');
      }, error => {
          console.log(error.json());
      });
  }

  ngOnInit() {

    this.routeSub = this.route.params.subscribe(params => {
      this.eventId = +params['eventId'];
      console.log('event ID: ' + this.eventId);
    })
  }

}