import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationStateService } from 'src/app/shared/services/application-state.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AppData } from 'src/app/shared';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getResolution: boolean;
  sideToggleClick = false;
  noteList = [];
  searchValue: string;
  constructor(private applicationStateService: ApplicationStateService,
    private localStorage: LocalStorageService) {
    this.getResolution = applicationStateService.getIsMobileResolution();
    console.log('getIsMobileResolution', this.getResolution);

  }

  ngOnInit() {
  }

  // sideToggle() {
  //   if (!this.sideToggleClick) {
  //     this.sideToggleClick = true;
  //   } else {
  //     this.sideToggleClick = false;
  //   }
  // }

  AddItem() {
    this.noteList = this.localStorage.getItem('chatData');
    this.searchValue = '';
    const date = new Date()
    let newObj = {
      name: '',
      date: date,
      id: this.noteList.length + 1,
      description: 'No additional details found'
    }
    this.noteList.push(newObj);
    console.log(this.noteList);
    AppData.chatSub$.next(this.noteList);
    AppData.selectedItem$.next(newObj);
  }

  deleteItem() {
    this.noteList = this.localStorage.getItem('chatData');
    this.searchValue = '';
    console.log(AppData.selectedNote, 'delete', this.noteList);
    const deleteItem = AppData.selectedNote;
    if (deleteItem['id']) {
      const index = this.noteList.findIndex(item => item.outletId == deleteItem['id']);
      this.noteList.splice(index, 1);
      AppData.chatSub$.next(this.noteList);
      AppData.selectedItem$.next(this.noteList[this.noteList.length - 1]);
    }
  }

  searchNote(searchStr) {
    console.log(searchStr, '------>');
    const noteListArry = JSON.parse(JSON.stringify(AppData.detailsChatList));
    const filterNotes = this.filterNoteList(noteListArry, searchStr.toUpperCase());
    console.log(filterNotes, 'filterNotes');
    AppData.filterNotes.next(filterNotes);
  }

  filterNoteList(tempList, searchStr) {
    let searchArray = [];
    searchArray = tempList.filter((item) =>
      item['name'].toUpperCase().indexOf(searchStr) >= 0 || item['description'].toUpperCase().indexOf(searchStr) >= 0
    )
    return searchArray;
  }


}
