import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicationModel } from '../core/model/application.model'
import { JobApiService } from '../core/services/job-api.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {
  formInvalid = true;
  application: ApplicationModel = { 
      job: '',
      title: '',
      experience: '',
      country: '',
      city: ''
  };
  experience = new FormControl('', [Validators.required]);




  constructor(private router: Router, private jobApi: JobApiService) { }

  ngOnInit() {
    if (history.state.data) {
      this.application.job = history.state.data.job.name;
    }
  }

  navigateToList(): void{ 
    this.router.navigateByUrl('/')
  }

  checkFormValidity(event: any) {
    
    if (this.application.title) {
      if (this.application.experience) {
        if (this.application.country) {
          if (this.application.city) {
            this.formInvalid = false;
          } else {
            this.formInvalid = true;
          }
        } else {
          this.formInvalid = true;
        }
      } else {
        this.formInvalid = true;
      }
    } else {
      this.formInvalid = true;
    }
  }

  preparePayload() {
    this.jobApi.postApplication(this.application).subscribe(result => {
      window.alert('Thank you. Your Application has been submitted')
      this.router.navigateByUrl('/')
    })
  }

}
