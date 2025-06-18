import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  images = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F1.jpg?alt=media&token=fcec66b2-1ef2-4291-af23-8ae76658f761',
      alt: 'Image 1',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F2.jpg?alt=media&token=59809b83-275c-41e4-9a08-b38167af3671',
      alt: 'Image 2',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F9.jpg?alt=media&token=4202866e-ff7b-45bc-84f6-17aaff80a818',
      alt: 'Image 4',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F5.jpeg?alt=media&token=f7d99453-6abe-4c99-b739-1b660bf2698b',
      alt: 'Image 5',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F6.jpg?alt=media&token=f6b9e7e2-e8a1-4c75-b0c7-1ee9e3c43e8a',
      alt: 'Image 6',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F7.jpg?alt=media&token=7e3eece6-bbb8-4a0a-a98f-fef65a839f69',
      alt: 'Image 7',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F8.jpg?alt=media&token=0e9d04d6-3098-47f3-a29a-3192de488c81',
      alt: 'Image 8',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F4.jpg?alt=media&token=748b142d-7ee3-44ec-8e67-378f64269c03',
      alt: 'Image 9',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F10.jpg?alt=media&token=c5df4a95-d20b-485c-8fb0-dce9e8a7b703',
      alt: 'Image 10',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F11.jpg?alt=media&token=d92f39a2-768a-4205-bc60-3624677637af',
      alt: 'Image 11',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/workshop%2F3.jpg?alt=media&token=79217440-d162-497a-a92e-d11d1f57bc47',
      alt: 'Image 3',
    },
  ];
}
