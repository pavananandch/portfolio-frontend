import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemosComponent } from './components/demos/demos.component';
import { HomeComponent } from './components/home/home.component';
import { VisitorsComponent } from './components/visitors/visitors.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'visitors',
  component: VisitorsComponent
},
{
  path: 'demos',
  component: DemosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
