import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Status } from '../../interfaces/status';
import { JobService } from '../../services/job.service';
import { Job } from '../../interfaces/job';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  form!: FormGroup;
  status$: Observable<Status[]>;
  status!: Status[];
  job!: Job;
  id!: string;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private jobsService: JobService,
    private route: ActivatedRoute,
    private router: Router ) {
    this.status$ = this.jobsService.getStatus();
    this.status$.subscribe(status => this.status = status);
  }

  ngOnInit(): void {
    this.createForm();
    this.setJob();
  }

  setJob() {
    this.route.params.subscribe( params => {
      const { id } = params;
      if (id) {
        this.id = id;
        this.isLoading = true;
        this.jobsService.getJob(id).subscribe( job => {
          if (job) {
            this.job = job;
            const { company, description, status, status_id } = this.job;
            this.form.setValue({
              company,
              description,
              status,
              status_id,
              date: this.job.date.toDate()
            })
          }
          this.isLoading = false;
        })
      }
    })
  }

  createForm() {
    this.form = this.fb.group({
      company: ['', [Validators.required]],
      description: ['', [Validators.required]],
      status_id: ['', Validators.required],
      date: [new Date()],
      status: [],
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading(Swal.getConfirmButton());

    const state = this.status.filter(state => state.id == this.form.value.status_id);
    this.form.controls['status'].setValue(state[0].name);

    if (!this.job) {
      this.jobsService.createJob(this.form.value).subscribe( () => this.swalSuccess('/jobs'));
      return;
    }

    this.jobsService.updateJob(this.id, this.form.value).subscribe( () => this.swalSuccess('/jobs'));
  }

  private swalSuccess(url: string) {
    Swal.fire({
      icon: 'success',
      title: 'Completado',
      text: 'Pedido guardado con ??xito'
    }).then(() => {
      /* redirect */
      this.router.navigateByUrl(url);
    });
  }
}
