import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  move() {
    this.route.navigate(['/news'], { queryParams: { page: 1 } });
  }
}
