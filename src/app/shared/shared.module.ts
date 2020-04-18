import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { ChatSidebarComponent } from '../modules/home/components/chat-sidebar/chat-sidebar.component';

@NgModule({
  declarations: [HeaderComponent, ChatSidebarComponent],
  imports: [
    CommonModule,
  ],
  exports: [HeaderComponent, ChatSidebarComponent]
})
export class SharedModule { }
