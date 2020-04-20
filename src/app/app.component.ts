import { Component } from '@angular/core';
import { AppData } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appData: AppData) {
  }

  scrollTop(event) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000)
  }
}
