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
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./component/page/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./component/page/news/news.module').then(m => m.NewsModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./component/form/reactive_form/reactive/reactive.module').then(m => m.ReactiveModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./component/page/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./component/user/user.module').then(m => m.UserModule),
    canActivate: [ClientGuard],
    canActivateChild: [ClientGuard],
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
