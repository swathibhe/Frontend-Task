import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollTop(event) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000)
  }
}
