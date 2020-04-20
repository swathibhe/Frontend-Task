import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppData } from 'src/app/shared';
import { ApplicationStateService } from 'src/app/shared/services/application-state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat-sidebar',
  templateUrl: './chat-sidebar.component.html',
  styleUrls: ['./chat-sidebar.component.scss']
})
export class ChatSidebarComponent implements OnInit {

  @Input() chatData;
  @Output() chatItem = new EventEmitter();
  @Output() updateItemsList = new EventEmitter();
  @Output() filterNote = new EventEmitter();
  @Output() titleChange = new EventEmitter();

  chatItemList = [];
  public date = new Date();
  getResolution: boolean;
  title: string;
  chatId;

  constructor(private applicationStateService: ApplicationStateService) {
    this.getResolution = applicationStateService.getIsMobileResolution();
  }

  ngOnInit(): void {
    const chatDataList = JSON.parse(JSON.stringify(this.chatData));
    this.chatItemList = JSON.parse(JSON.stringify(chatDataList.reverse()));
    AppData.chatSub$.subscribe((obj) => {
      const chatDataList = JSON.parse(JSON.stringify(obj));
      this.chatItemList = JSON.parse(JSON.stringify(chatDataList.reverse()));
      this.chatId = chatDataList.length;
      this.emitSelectItem();
    });

    AppData.selectedItem$.subscribe(item => {
      if (item) {
        this.chatId = item.id;
        this.updateItemsList.emit();
        this.emitSelectItem();
      }
    })

    AppData.filterNotes.subscribe(item => {
      if (item !== null) {
        this.filterNote.emit(item);
        const chatDataList = JSON.parse(JSON.stringify(item));
        this.chatItemList = JSON.parse(JSON.stringify(chatDataList.reverse()));
        if (item.length > 0) {
          this.chatId = item[item.length - 1].id;
          this.emitSelectItem();
        }
      }
    })
    console.log(this
      .searchedWordsControl
      .valueChanges
      .pipe(
        map((search: string) => search.trim().split(' '))
      ));
    
  }

  emitSelectItem() {
    const findItem = this.chatItemList.find(item => item.id == this.chatId);
    console.log(findItem);
    this.chatItem.emit(findItem);
    AppData.selectedNote = findItem;
  }

  editNote(item) {
    if (item.id) {
      this.chatId = item.id;
      this.chatItem.emit(item);
      AppData.selectedNote = item;
    }
  }

  toggleSelection(i) {

  }
  onTitleChange(title) {
    this.titleChange.emit(title);
  }
  dateSet(setDay) {
    let dayFormat = '';
    if (new Date(setDay).getDate() < new Date().getDate()) {
      dayFormat = String(new Date(setDay)).split(' ')[0];
    } else {
      let startDateHourString = new Date(setDay).getHours();
      const startDateMinString = new Date(setDay).getMinutes();
      let startDateAmPmString = 'AM';
      if (Number(startDateHourString) === 12) {
        startDateAmPmString = 'PM';
      } else if (Number(startDateHourString) > 12) {
        startDateHourString = Number(startDateHourString) - 12;
        startDateAmPmString = 'PM';
      } else if (Number(startDateHourString) > 24) {
        startDateHourString = Number(startDateHourString) - 24;
        startDateAmPmString = 'AM';
      }
      dayFormat = startDateHourString + ':' + startDateMinString + ' ' + startDateAmPmString;

    }
    return dayFormat;
  }

  searchedWordsControl = new FormControl('basically');

  searchedWords$: Observable<string[]> = this
    .searchedWordsControl
    .valueChanges
    .pipe(
      map((search: string) => search.trim().split(' '))
    )

}
