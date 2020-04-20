import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { CHAT_LIST } from 'src/app/core/constants/json.constant';

@Injectable({
  providedIn: 'root'
})
export class AppData {

  static chatSub$ = new BehaviorSubject(CHAT_LIST);
  static detailsChatList = [];
  static selectedItem$ = new BehaviorSubject(null);
  static selectedNote = {};
  static filterNotes = new BehaviorSubject(null)


  constructor(private localStorage: LocalStorageService) {
    // for getting order object config from session storage
    if (this.localStorage.getItem('chatData') !== null && this.localStorage.getItem('chatData').length !== 0) {
      AppData.chatSub$.next(this.localStorage.getItem('chatData'));
    }
    AppData.chatSub$.subscribe((obj) => {
      if (obj) {
        this.localStorage.setItem('chatData', obj);
        AppData.detailsChatList = JSON.parse(JSON.stringify(obj));
      }
    });
    AppData.selectedItem$.subscribe(item => {
      if (item) {
        AppData.selectedNote = item;
      }
    })

  }
}
