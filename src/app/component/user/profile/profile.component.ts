import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isTyping = false;

  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.data);
  }

  checkType() {
    this.isTyping = true;
  }
}
