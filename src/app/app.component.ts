import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {AboutComponent} from "./components/about/about.component";
import {ProjectComponent} from "./components/project/project.component";
import {LifeComponent} from "./components/life/life.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HomePageComponent, AboutComponent, ProjectComponent, LifeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abuthair';
}
