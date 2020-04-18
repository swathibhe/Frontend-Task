import { Router } from '@angular/router';
import { CHAT_LIST } from 'src/app/core/constants/json.constant';
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

    onAccountItemClick(obj) {
        console.log(obj);
        this.router.navigate([obj.url]);

    }
    chatItemDetails(event) {
        this.title = event.name;
        this.selectedItem = event;
        console.log('event', event, this.title);
    }
    onTitleChange(titleValue: string) {
        console.log(titleValue);
        this.chatItemList.find(item => {
            if (item.id == this.selectedItem.id) {
                item.name = titleValue;
            }
        })
        AppData.chatSub$.next(this.chatItemList);
    }

}
