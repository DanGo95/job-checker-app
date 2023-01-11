import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* angular material components */
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

/* components */
import { AuthFormComponent } from './auth-form/auth-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { JobFormComponent } from './job-form/job-form.component';
import { MatSelectModule } from '@angular/material/select';
import { SpinnerComponent } from './spinner/spinner.component';
import { ShellComponent } from './shell/shell.component';



@NgModule({
  declarations: [
    AuthFormComponent,
    SidebarComponent,
    JobFormComponent,
    SpinnerComponent,
    ShellComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent
  ]
})
export class ComponentsModule { }
