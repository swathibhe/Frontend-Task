import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.scss']
})
export class HomeDesktopComponent extends HomeComponent implements OnInit {

  constructor(router: Router) {
    super(router);
  }

  ngOnInit() {
  }

}
