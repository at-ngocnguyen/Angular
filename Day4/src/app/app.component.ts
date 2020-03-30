import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Day4';
  fullname='';
  email='';
  password='';
  street='';
  city='';
  country='';
  
  signIn(form) {
    console.log(form)
  }
}
