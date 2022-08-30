import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  handleClick(elementId: string){
    this.viewportScroller.scrollToAnchor(elementId);
  }

  scrollToTop(){
    this.viewportScroller.scrollToPosition([0,0]);
  }
}
