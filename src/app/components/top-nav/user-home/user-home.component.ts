import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  backgroundUrl='assets/home_hero/banner.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
