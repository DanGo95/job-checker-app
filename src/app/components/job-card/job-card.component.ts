import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  jobs!: Job[];

  constructor( private jobService: JobService ) {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      console.log(this.jobs)
    });
  }

  ngOnInit(): void {
  }

}
