import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  constructor(
    private viewportScroller: ViewportScroller,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    console.log()
  }

  ngOnInit(): void {}
  handleClick(elementId: string) {
    if (!this.location.path().includes('home')) {
      this.router.navigate(['home']);
    }
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 0);
}

  scrollToTop() {
    if (!this.location.path().includes('home')) {
      this.router.navigate(['home']);
    }
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
