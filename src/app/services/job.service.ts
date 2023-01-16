import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, of } from 'rxjs';
import { Job } from '../interfaces/job';
import { Status } from '../interfaces/status';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private statusCollection: AngularFirestoreCollection<Status>;
  private jobsCollection: AngularFirestoreCollection<Job>

  constructor( private afs: AngularFirestore ) {
    this.statusCollection = this.afs.collection('status');
    this.jobsCollection = this.afs.collection('jobs', ref => ref.orderBy('date', 'desc'));
  }

  getStatus() {
    return this.statusCollection.valueChanges({idField: 'id'});
  }

  getStatusById(id: string) {
    return this.statusCollection.doc(id).valueChanges({idField: 'id'});
  }

  getJobs() {
    return this.jobsCollection.valueChanges({idField: 'id'});
  }

  getJob(id: string) {
    return this.jobsCollection.doc(id).valueChanges();
  }

  createJob( job: Job ) {
    return of(this.jobsCollection.add(job));
  }

  updateJob( id: string, job: Job ) {
    return of(this.jobsCollection.doc(id).update(job));
  }
}
