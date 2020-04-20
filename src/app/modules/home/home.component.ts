import { Router } from '@angular/router';
import { AppData } from 'src/app/shared';

export abstract class HomeComponent {

    public noteItemList = AppData.detailsNoteList;
    public date = new Date();
    title: String = '';
    selectedItem;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    noteItemDetails(event) {
        if (event) {
            this.title = event.name;
            this.selectedItem = event;
        }
        if (AppData.detailsNoteList.length === 0) {
            this.title = '';
            this.noteItemList = [];
        } else {
            this.noteItemList = AppData.detailsNoteList;
        }

    }
    onTitleChange(titleValue: string) {
        this.noteItemList.find(item => {
            if (item.id == this.selectedItem.id) {
                item.name = titleValue;
            }
        })
        AppData.noteSub$.next(this.noteItemList);
    }

    updateNoteItems() {
        this.noteItemList = AppData.detailsNoteList;
    }

    filerNotesList(filerItems) {
        this.noteItemList = filerItems;
    }
    titleChange(titleValue) {
        this.onTitleChange(titleValue);
    }

}
