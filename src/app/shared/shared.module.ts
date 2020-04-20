import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../core/components/header/header.component';
import { ChatSidebarComponent } from '../modules/home/components/chat-sidebar/chat-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './services/highlight.directive';

@NgModule({
  declarations: [HeaderComponent, ChatSidebarComponent, HighlightDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent, ChatSidebarComponent, HighlightDirective],
  providers: [HighlightDirective]
})
export class SharedModule { }
