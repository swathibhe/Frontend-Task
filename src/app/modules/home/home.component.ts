import { Router } from '@angular/router';
import { AppData } from 'src/app/shared';

export abstract class HomeComponent {

    public chatItemList = AppData.detailsChatList;
    public date = new Date();
    title: String = '';
    selectedItem;
    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    chatItemDetails(event) {
        if (event) {
            this.title = event.name;
            this.selectedItem = event;
        }
        if (AppData.detailsChatList.length === 0) {
            this.title = '';
            this.chatItemList = [];
        } else {
            this.chatItemList = AppData.detailsChatList;
        }

    }
    onTitleChange(titleValue: string) {
        this.chatItemList.find(item => {
            if (item.id == this.selectedItem.id) {
                item.name = titleValue;
            }
        })
        AppData.chatSub$.next(this.chatItemList);
    }

    updateNoteItems() {
        this.chatItemList = AppData.detailsChatList;
    }

    filerNotesList(filerItems) {
        this.chatItemList = filerItems;
    }
    titleChange(titleValue) {
        this.onTitleChange(titleValue);
    }

}
