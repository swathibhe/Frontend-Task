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


  constructor(private localStorage: LocalStorageService) {
    AppData.chatSub$.subscribe((obj) => {
      console.log('------->subscribe', obj);
      if (obj) {
        this.localStorage.setItem('chatData', obj);
        AppData.detailsChatList = JSON.parse(JSON.stringify(obj));
      }
    });
  }
}
