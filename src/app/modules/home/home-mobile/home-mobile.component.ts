import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrls: ['./home-mobile.component.scss']
})
export class HomeMobileComponent extends HomeComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
    console.log(this.chatItemList);
  }

}
