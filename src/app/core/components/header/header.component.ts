import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationStateService } from 'src/app/shared/services/application-state.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getResolution: boolean;
  sideToggleClick = false;
  constructor(private applicationStateService: ApplicationStateService) {
    this.getResolution = applicationStateService.getIsMobileResolution();
    console.log('getIsMobileResolution', this.getResolution);

  }

  ngOnInit() {
  }

  sideToggle() {
    if (!this.sideToggleClick) {
      this.sideToggleClick = true;
    } else {
      this.sideToggleClick = false;
    }
  }


}
