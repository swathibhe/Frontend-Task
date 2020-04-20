import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppData } from 'src/app/shared';
import { ApplicationStateService } from 'src/app/shared/services/application-state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-note-sidebar',
  templateUrl: './note-sidebar.component.html',
  styleUrls: ['./note-sidebar.component.scss']
})
export class NoteSidebarComponent implements OnInit {

  @Input() noteData;
  @Output() noteItem = new EventEmitter();
  @Output() updateItemsList = new EventEmitter();
  @Output() filterNote = new EventEmitter();
  @Output() titleChange = new EventEmitter();

  noteItemList = [];
  public date = new Date();
  getResolution: boolean;
  title: string;
  noteId;

  constructor(private applicationStateService: ApplicationStateService) {
    this.getResolution = applicationStateService.getIsMobileResolution();
  }

  ngOnInit(): void {
    const noteDataList = JSON.parse(JSON.stringify(this.noteData));
    this.noteItemList = JSON.parse(JSON.stringify(noteDataList.reverse()));
    AppData.noteSub$.subscribe((obj) => {
      const noteDataList = JSON.parse(JSON.stringify(obj));
      this.noteItemList = JSON.parse(JSON.stringify(noteDataList.reverse()));
      this.noteId = noteDataList.length;
      this.emitSelectItem();
    });

    AppData.selectedItem$.subscribe(item => {
      if (item) {
        this.noteId = item.id;
        this.updateItemsList.emit();
        this.emitSelectItem();
      }
    })

    AppData.filterNotes.subscribe(item => {
      if (item !== null) {
        this.filterNote.emit(item);
        const noteDataList = JSON.parse(JSON.stringify(item));
        this.noteItemList = JSON.parse(JSON.stringify(noteDataList.reverse()));
        if (item.length > 0) {
          this.noteId = item[item.length - 1].id;
          this.emitSelectItem();
        }
      }
    })
    
  }

  emitSelectItem() {
    const findItem = this.noteItemList.find(item => item.id == this.noteId);
    this.noteItem.emit(findItem);
    AppData.selectedNote = findItem;
  }

  editNote(item) {
    if (item.id) {
      this.noteId = item.id;
      this.noteItem.emit(item);
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
