import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { JobFormComponent } from './components/job-form/job-form.component';
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'job-new', component: JobFormComponent },
      { path: 'job-new/:id', component: JobFormComponent },
    ]
  },
  { path: 'login', component: AuthFormComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
