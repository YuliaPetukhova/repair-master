import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
    imports: [MenuComponent, RouterLink]
})
export class MainComponent {

}
