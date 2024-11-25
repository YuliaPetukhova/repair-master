import {Component} from '@angular/core';
import {MenuComponent} from "../main/menu/menu.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    imports: [
        MenuComponent,
        NgOptimizedImage
    ],

    standalone: true
})
export class AboutComponent {

}
