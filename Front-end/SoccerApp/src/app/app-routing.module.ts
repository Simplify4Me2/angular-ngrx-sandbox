import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDaysComponent } from './match-days/match-days.component';


const routes: Routes = [
  { path: 'match', component: MatchDaysComponent },
  { path: '', redirectTo: 'match', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
