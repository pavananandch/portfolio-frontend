import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component'
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { DataService } from './data.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    imports: [CommonModule, HttpClientModule],
    declarations: [ChatAvatarComponent, ChatWidgetComponent, ChatInputComponent],
    providers: [DataService],
    exports: [ChatWidgetComponent]
})
export class ChatModule {}
