import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: false
})
export class FooterComponent implements OnInit {
  socialMediaLinks = {
    facebook: 'https://www.facebook.com/pavan.anand2/',
    linkedIn: 'https://www.linkedin.com/in/v-s-s-pavan-anand-chinthalapudi-906628125/',
    instagram: 'https://www.instagram.com/always_pavananand/',
    github: 'https://github.com/pavananandch'
  };
  authorName = 'Pavan Anand Chinthalapudi';
  currentDate = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
