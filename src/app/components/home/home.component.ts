import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticlesConfig } from './particles-config';
import { DataService } from 'src/app/chat/data.service';

declare let particlesJS: any;
declare let AOS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hobbies = ['Programming', 'Travelling', 'foodie', 'Learning', 'Video Games', 'Building Things', 'Shettle', 'Drawing',
    'Pets', 'Short Film Making', 'Workouts', 'Novel Reading'];

  skills = [{
    name: 'HTML',
    iconName: 'fab fa-html5',
    color: '#e34c26'
  }, {
    name: 'CSS',
    iconName: 'fab fa-css3-alt',
    color: '#264de4'
  }, {
    name: 'Bootstrap',
    iconName: 'fab fa-bootstrap',
    color: '#602c50'
  }, {
    name: 'JavaScript',
    iconName: 'fab fa-js',
    color: '#f0db4f'
  }, {
    name: 'Angular',
    iconName: 'fab fa-angular',
    color: '#dd1b16'
  }, {
    name: 'Node JS',
    iconName: 'fab fa-node-js',
    color: '#3c873a'
  }, {
    name: 'React JS',
    iconName: 'fab fa-react',
    color: '#61dbfb'
  }, {
    name: 'Mongo DB',
    iconName: 'fas fa-database',
    color: '#4db33d'
  }, {
    name: 'GIT',
    iconName: 'fab fa-github',
    color: '#211f1f'
  }, {
    name: 'JIRA',
    iconName: 'fab fa-jira',
    color: '#57afe5'
  }, {
    name: 'Docker',
    iconName: 'fab fa-docker',
    color: '#0db7ed'
  }, {
    name: 'AWS',
    iconName: 'fab fa-aws',
    color: '#f90'
  }, {
    name: 'Azure',
    iconName: 'fab fa-microsoft',
    color: '#007fff'
  }, {
    name: 'Firebase',
    iconName: 'fab fa-google',
    color: '#ffa611'
  }, {
    name: 'Heroku',
    iconName: 'fas fa-cloud',
    color: '#6567a5'
  }, {
    name: 'Jenkins',
    iconName: 'fab fa-jenkins',
    color: '#3d5a6e'
  }
  ];

  workExperience = [{
    designation: 'Systems Analyst',
    companyName: 'IVY Comptech',
    description: 'My role here is to design and implement new features and scalable enhancements. Work in an Agile methodology. Deliver high-quality codes and products using JavaScript libraries like Angular, Reactjs, electron, and REST API.',
    duration: 'May 2022 - Present'
  },{
    designation: 'Software Engineer',
    companyName: 'Innominds Software',
    description: 'In this organization my role is to work with different javascript libraries like Ionic, Angular, Electron JS. Tracking and fixing bugs using ELK stack and tracking the user event using Google Analytics to make the interface easier',
    duration: 'Mar 2021 - May 2022'
  },{
    designation: 'Research Associate',
    companyName: 'Miracle Software Systems',
    description: 'My role here is to design and implement new features and scalable enhancements. Work in an Agile methodology. Deliver high-quality codes and products using JavaScript libraries like Angular, Reactjs, electron, and REST API.',
    duration: 'Aug 2017 - Mar 2021'
  }];
  selectedIndex = -1;
  defaultLogoColor = '#000000de';
  myForm: FormGroup = null as any;

  constructor(private fb: FormBuilder, private viewportScroller: ViewportScroller, private data: DataService) { }

  ngOnInit(): void {
    AOS.init();
    this.invokeParticles();
    this.initForm();
  }

  public initForm(){
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['']
    })
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () { });
  }

  public async submitHandler(){
    const formValue = this.myForm.value;
    try {
      console.log({formValue});

      this.data.postVisitorResponse(formValue).subscribe({
        next: (res) => {
          alert("posted your response");
        },
        error: (error) => {
          console.log({error});

        }
      })
      // await this.afs.collection('contacts').add(formValue);
      // this.success = true;
      // this.data
    } catch(err) {
      console.error(err)
    }
  }

  public goToAbout(){
    this.viewportScroller.scrollToAnchor('aboutme');
  }

  downloadResume() {
    // Path to your PDF file
    const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/pavananand-portfolio.appspot.com/o/pavan_anand_resume.pdf?alt=media&token=e232af6d-1fb8-445d-8506-6cbf81e24ae2';

    // Triggering download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'pavananand_resume.pdf'; // Filename to be downloaded
    link.click();
  }
}
