import { Component } from '@angular/core';
import { AppData } from './shared';
// import { CHAT_LIST } from 'src/app/core/constants/json.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appData: AppData) {
    // AppData.chatSub$.next(CHAT_LIST);
  }

  scrollTop(event) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000)
  }
}
