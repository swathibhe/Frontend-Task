import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppData } from 'src/app/shared';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {
  @Input() chatData;
  @Output() chatItem = new EventEmitter();
  chatItemList = [];
  chatId;
  constructor() { }

  ngOnInit(): void {
    const chatDataList = JSON.parse(JSON.stringify(this.chatData));
    this.chatItemList = JSON.parse(JSON.stringify(chatDataList.reverse()));
    this.chatId = this.chatItemList.length;
    if (this.chatId) {
      const findItem = this.chatItemList.find(item => item.id == this.chatId);
      console.log(findItem);
      this.chatItem.emit(findItem);
    }
    AppData.chatSub$.subscribe((obj) => {
      console.log(this.chatData, '-------this.chartData');
      if (obj) {
        const chatDataList = JSON.parse(JSON.stringify(obj));
        this.chatItemList = JSON.parse(JSON.stringify(chatDataList.reverse()));
      }
    });
  }

}
