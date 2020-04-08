import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientResolver implements Resolve<any>{

  constructor() {

  }
  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<any> | any {
    return of({ data: 'user' }).pipe(delay(3000));
  }

}
