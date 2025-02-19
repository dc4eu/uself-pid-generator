import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { IssueVCComponent } from './components/issue-vc/issue-vc.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'issue', component: IssueVCComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes),
  ]
})
export class AppRoutingModule { }
