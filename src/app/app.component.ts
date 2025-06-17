import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './chat/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
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

  constructor(private router: Router, private dataService:DataService) {
    this.dataService.awakeServer()
    .subscribe((resp) => {
      console.log('Server is awake', resp);
    }, (err) => {
      console.error('Error waking server', err);
    });
    navigator.geolocation.getCurrentPosition(resp => {
      const location = {lng: resp.coords.longitude, lat: resp.coords.latitude};
      // this.$gaService.event('VIEW', location.lng + '' + location.lat, 'Name');
    },
    err => {
      console.log({err});
    });
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
