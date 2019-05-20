import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { NewsComponent } from './news/news.component';
import { FindUsComponent } from './find-us/find-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'team', component: TeamComponent },
    { path: 'news', component: NewsComponent },
    { path: 'findus', component: FindUsComponent },
    { path: '**', component: PageNotFoundComponent },    
  ];