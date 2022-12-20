import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  active = false;
  user: any;

  constructor( private auth: AuthService ) { }

  ngOnInit(): void {
    console.log(this.auth.user);
    this.user = this.auth.user;
  }

  onClick() {
    this.active = !this.active;
  }

}
