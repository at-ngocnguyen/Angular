import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private authen: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authen.logout();
    this.router.navigateByUrl('login')
  }
}
