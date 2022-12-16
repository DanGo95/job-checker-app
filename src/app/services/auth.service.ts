import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any = {};

  constructor( public auth: AngularFireAuth ) {
    this.auth.authState.subscribe( user => {
      if (!user) {return;}
      this.user.photo = user.photoURL;
      this.user.name = user.displayName;
      this.user.uid = user.uid;
    })
  }

  login() {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.user = {};
    return this.auth.signOut();
  }
}
