import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [MenuComponent]
})
export class MainComponent {

}
