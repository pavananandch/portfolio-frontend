import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
  standalone: false,
})
export class DemosComponent implements OnInit {
  projects = [
    {
      name: 'Chatbot using IBM Watson',
      repoUrl: 'https://github.com/pavananand/chatbot-demo',
      demoUrl: 'https://pavan-chatbot-demo.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/chatbot.jpg?alt=media&token=9c3d9a34-c4d4-4478-94fa-0cc62723baf8',
    },
    {
      name: 'Weather and forcasting app',
      repoUrl: 'https://github.com/pavananand/weather-app',
      demoUrl: 'https://weather-app-pavan.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/weather.jpg?alt=media&token=c462a71c-2020-4888-8067-c1359c05487a',
    },
    {
      name: 'Static Website for Organization',
      repoUrl: 'https://github.com/pavananand/static-web-app',
      demoUrl: 'https://static-web-app-812c5.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/staticwebsite.jpg?alt=media&token=52e7b125-8c19-4331-914b-df5b078a26f7',
    },
    {
      name: 'CRUD app using Angular and Firebase',
      repoUrl: 'https://github.com/pavananand/crud-firebase-angular',
      demoUrl: 'https://bus-ticket-booking-38679.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/demoapp.jpg?alt=media&token=433ca15d-d514-4587-b615-d8523a831a0f',
    },
    {
      name: 'ToDo app using Angular with unit tests',
      repoUrl: 'https://github.com/pavananand/crud-firebase-angular',
      demoUrl: 'https://todo-app-pavan.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/todo.jpg?alt=media&token=49e47574-be61-48f4-8ab8-24e5a7fed42b',
    },
    {
      name: 'Task Management app using React',
      repoUrl:
        'https://github.com/pavananandch/task-management-app-frontend-react',
      demoUrl: 'https://todo-app-pavan.web.app/',
      img: 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/task_management.jpg?alt=media&token=f147ad54-d64a-4b4a-8ebc-71fe17d02cbf',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
