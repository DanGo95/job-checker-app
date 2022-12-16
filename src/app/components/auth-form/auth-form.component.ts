import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor( private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login().then(
      () => this.router.navigateByUrl('dashboard')
    )
  }

}
