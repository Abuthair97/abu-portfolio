import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-life',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './life.component.html',
  styleUrl: './life.component.css'
})
export class LifeComponent {

}
