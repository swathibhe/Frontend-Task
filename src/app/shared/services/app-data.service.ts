import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { NOTE_LIST } from 'src/app/core/constants/json.constant';

@Injectable({
  providedIn: 'root'
})
export class AppData {

  static noteSub$ = new BehaviorSubject(NOTE_LIST);
  static detailsNoteList = [];
  static selectedItem$ = new BehaviorSubject(null);
  static selectedNote = {};
  static filterNotes = new BehaviorSubject(null)


  constructor(private localStorage: LocalStorageService) {
    // for getting order object config from session storage
    if (this.localStorage.getItem('noteData') !== null && this.localStorage.getItem('noteData').length !== 0) {
      AppData.noteSub$.next(this.localStorage.getItem('noteData'));
    }
    AppData.noteSub$.subscribe((obj) => {
      if (obj) {
        this.localStorage.setItem('noteData', obj);
        AppData.detailsNoteList = JSON.parse(JSON.stringify(obj));
      }
    });
    AppData.selectedItem$.subscribe(item => {
      if (item) {
        AppData.selectedNote = item;
      }
    })

  }
}
