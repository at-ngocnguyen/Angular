import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/share/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate, CanActivateChild {
  isLogin = false;

  constructor(
    private authen: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  checkLogin() {
    if (!this.authen.isLogin) {
      this.router.navigateByUrl('/')
    }
    return this.authen.isLogin
  }
}
