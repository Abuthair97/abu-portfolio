import { Routes } from '@angular/router';
import {LifeComponent} from "./components/life/life.component";
import {ProjectComponent} from "./components/project/project.component";
import {AboutComponent} from "./components/about/about.component";
import {HomePageComponent} from "./components/home-page/home-page.component";

export const routes: Routes = [
  {
    path: '',
    title: ' Abuthair Portfolio ',
    component: HomePageComponent,
  },
  {
    path: 'about',
    title: ' About < Abuthair Portfolio ',
    component: AboutComponent,
  },
  {
    path: 'project',
    title: 'Project < Abutair Portfolio',
    component: ProjectComponent,
  },
  {
    path: 'life',
    title: 'Life < Abutair Portfolio',
    component: LifeComponent,
  }
];
