import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isDemosPage = true;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (this.isDemosPage) {
      element.classList.add('navbar-inverse');
    } else {
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('navbar-inverse');
      } else {
        element.classList.remove('navbar-inverse');
      }
    }
  }

  public theme: 'blue' | 'grey' | 'red' = 'blue';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (window.location.hash && (window.location.hash.includes('demos') || window.location.hash.includes('visitors'))) {
        this.isDemosPage = true;
        let element = document.querySelector('.navbar') as HTMLElement;
        if (this.isDemosPage) {
          element.classList.add('navbar-inverse');
        }
      } else {
        this.isDemosPage = false;
      }
    })
  }
}
