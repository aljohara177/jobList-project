import { Component, OnInit } from '@angular/core';
import { Job } from '../core/model/application.model';
import { Router } from '@angular/router';
import { JobApiService } from '../core/services/job-api.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  jobList: Job[] = [];

  constructor(private jobApi: JobApiService, private router: Router) { }

  ngOnInit() {
    this.jobApi.getJobs().subscribe(job => {
      job['savedJob'] = false;
      this.jobList = job;
    })
  }

  navigateToApplication(job: Job): void{ 
    this.router.navigate(['/apply'], {state: {data: {job}}});
  }

}
