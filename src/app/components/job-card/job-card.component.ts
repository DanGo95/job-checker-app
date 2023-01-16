import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../interfaces/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {

  jobs!: Job[];

  constructor( private jobService: JobService, private router: Router ) {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
      console.log(this.jobs)
    });
  }

  ngOnInit(): void {
  }

  edit(id: string | undefined) {
    if (id) {
      this.router.navigateByUrl(`/job-new/${id}`);
    }
  }

}
