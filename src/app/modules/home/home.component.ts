import { Router } from '@angular/router';

export abstract class HomeComponent {

    // public accountItemList = ACCOUNT_ITEMS;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    onAccountItemClick(obj) {
        console.log(obj);
        this.router.navigate([obj.url]);

    }

}
