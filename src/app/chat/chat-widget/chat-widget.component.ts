import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core'
import { Subject } from 'rxjs'
import { fadeIn, fadeInOut } from '../animations'
import { DataService } from '../data.service'
import { AnalyticsService } from 'src/app/services';

@Component({
    selector: 'chat-widget',
    templateUrl: './chat-widget.component.html',
    styleUrls: ['./chat-widget.component.css'],
    animations: [fadeInOut, fadeIn],
    standalone: false
})
export class ChatWidgetComponent implements OnInit {
  @ViewChild('bottom') bottom: ElementRef = null as any;
  @Input() public theme: 'blue' | 'grey' | 'red' = 'blue'

  public _visible = false
  private _sessionId = '';

  public get visible() {
    return this._visible
  }

  @Input() public set visible(visible) {
    this._visible = visible
    if (this._visible) {
      setTimeout(() => {
        this.scrollToBottom()
        this.focusMessage()
      }, 0)
    }
  }

  public focus = new Subject();

  public operator = {
    name: 'Scooby',
    status: 'online',
    avatar: `https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/support.png?alt=media&token=e39df66b-64e5-49c3-a6dc-c6f73ca48031`,
  }

  public client = {
    name: 'Guest User',
    status: 'online',
    avatar: `https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/user.png?alt=media&token=bf5ccd50-01ee-44bc-973c-8f53bd575c00`,
  }

  public messages:any = []

  public addMessage(from: any, text: any, type: 'received' | 'sent') {
    this.messages.unshift({
      from,
      text,
      type,
      date: new Date().getTime(),
    })
    this.scrollToBottom()
  }

  public scrollToBottom() {
    if (this.bottom !== undefined) {
      this.bottom.nativeElement.scrollIntoView({behavior: 'smooth', block: 'end'})
    }
  }

  public focusMessage() {
    this.focus.next(true)
  }

  ngOnInit() {
    // setTimeout(() => this.visible = true, 1000)
    this.analyticsService.trackEvent('chat_widget_loaded', {
      description: 'home page into view',
      page_section: 'home',
      debug_mode: true, // Optional: Useful for DebugView in GA4
    });
    setTimeout(() => {
      this.addMessage(this.operator, 'Hi, how can we help you?', 'received')
    }, 1500)
  }

  public toggleChat() {
  this.analyticsService.trackEvent('chat_widget_toggled', {
    description: 'home page into view',
    page_section: 'home',
    debug_mode: true, // Optional: Useful for DebugView in GA4
  });
    this.visible = !this.visible
  }

  public sendMessage({ message }: any) {
    if (message.trim() === '') {
      return
    }
    const obj = {
      text: message,
      sessionId: this._sessionId
    }
    this.addMessage(this.client, message, 'sent')
    this.dataService.getbotResponse(obj).subscribe(res => {
      if(res) {
        const botResponse = res.bot;
        this._sessionId = res.sessionId;
        console.log(this._sessionId);

        this.addMessage(this.operator, botResponse, 'received');
        setTimeout(() => {
          this.scrollToBottom();
          this.focusMessage();
        }, 1000);
      }

    }, err => {
      console.log({err})
    })
      }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === '/') {
      this.focusMessage()
    }
    if (event.key === '?' && !this._visible) {
      this.toggleChat()
    }
  }

  constructor(private dataService: DataService, private analyticsService: AnalyticsService){}

}
