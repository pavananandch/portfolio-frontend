import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticlesConfig } from './particles-config';

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
  selectedIndex = -1;
  defaultLogoColor = '#000000de';
  myForm: FormGroup = null as any;
  
  constructor(private fb: FormBuilder, private viewportScroller: ViewportScroller) { }

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
      // await this.afs.collection('contacts').add(formValue);
      // this.success = true;
    } catch(err) {
      console.error(err)
    }
  }

  public goToAbout(){
    this.viewportScroller.scrollToAnchor('aboutme');
  }
}
