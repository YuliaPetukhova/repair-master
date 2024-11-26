import {Component} from '@angular/core';
import {MenuComponent} from "../main/menu/menu.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
    selector: 'app-repair-services',
    templateUrl: './repair-services.component.html',
    styleUrls: ['./repair-services.component.scss'],
    imports: [
        MenuComponent,
        NgForOf,
        NgClass
    ],
    standalone: true
})
export class RepairServicesComponent {

    topics = ['Ремонт в новостройке', 'Ремонт во вторичной квартире', 'Выбор материалов', 'Ремонт', 'Материал'];
    selectedTopics: string[] = [];

    dates = ['16.11', '17.11'];
    selectedDates: string[] = [];

    times = ['20:00', '21:00'];
    selectedTimes: string[] = [];

    // availableDates: [
    //     {
    //         date: string,
    //         times: string[]
    //     }
    // ];

    // getAll(): Observable<ICatalog> {
    //
    //     return timer(1000).pipe(
    //         map((): ICatalog => {
    //             return {
    //                 groups: [],
    //                 groupTitles: []
    //             };
    //         }));

    toggleSelectionTopics(topic: string) {
        const index = this.selectedTopics.indexOf(topic);
        if (index === -1) {
            this.selectedTopics.push(topic);
        } else {
            this.selectedTopics.splice(index, 1);
        }
    }

    isSelectedTopics(topic: string): boolean {
        return this.selectedTopics.includes(topic);
    }

    toggleSelectionDates(date: string) {
        const index = this.selectedDates.indexOf(date);
        if (index === -1) {
            this.selectedDates.push(date);
        } else {
            this.selectedDates.splice(index, 1);
        }
    }

    isSelectedDates(date: string): boolean {
        return this.selectedDates.includes(date);
    }

    toggleSelectionTimes(time: string) {
        const index = this.selectedTimes.indexOf(time);
        if (index === -1) {
            this.selectedTimes.push(time);
        } else {
            this.selectedTimes.splice(index, 1);
        }
    }

    isSelectedTimes(time: string): boolean {
        return this.selectedTimes.includes(time);
    }
}
