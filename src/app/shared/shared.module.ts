import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { NoteSidebarComponent } from '../modules/home/components/note-sidebar/note-sidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, NoteSidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [HeaderComponent, NoteSidebarComponent],
})
export class SharedModule { }
