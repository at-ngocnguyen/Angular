import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/page/home/home.component';
import { NewsComponent } from './component/page/news/news.component';
import { ReactiveComponent } from './component/form/reactive_form/reactive/reactive.component';
import { LoginComponent } from './component/page/login/login.component';
import { UserComponent } from './component/user/user.component';
import { ClientGuard } from './component/user/clientguard.guard';
import { DashboardComponent } from './component/user/dashboard/dashboard.component';
import { ProfileComponent } from './component/user/profile/profile.component';
import { ClientResolver } from './component/user/profile/profile.resolve';
import { ProfileCanDeactivate } from './component/user/profile/profile.candeactive';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'registration', component: ReactiveComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'user', component: UserComponent, canActivate: [ClientGuard], canActivateChild: [ClientGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'profile', component: ProfileComponent,
        canDeactivate:[ProfileCanDeactivate],
        resolve: {
          data: ClientResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
