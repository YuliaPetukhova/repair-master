import {Component} from '@angular/core';
import {MenuComponent} from "../main/menu/menu.component";

@Component({
    selector: 'app-reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    imports: [
        MenuComponent
    ],
    standalone: true

})
export class ReviewsComponent {

}
