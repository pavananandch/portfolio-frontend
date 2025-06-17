import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ChatAvatarComponent } from './chat-avatar/chat-avatar.component'
import { ChatWidgetComponent } from './chat-widget/chat-widget.component'
import { ChatInputComponent } from './chat-input/chat-input.component'
import { DataService } from './data.service'
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'

@NgModule({ declarations: [ChatAvatarComponent, ChatWidgetComponent, ChatInputComponent],
    exports: [ChatWidgetComponent], imports: [CommonModule], providers: [DataService, provideHttpClient(withInterceptorsFromDi())] })
export class ChatModule {}
