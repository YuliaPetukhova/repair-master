import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../main/menu/menu.component";
import {NgClass, NgForOf} from "@angular/common";
import {ConsultationService} from "../../services/consultation.service";
import {IConsultation} from "../../models/IConsultation";
import {ITag} from "../../models/ITag";
import {IAvailableDates} from "../../models/IAvailableDates";

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
export class RepairServicesComponent implements OnInit {

    tags: ITag[] | undefined;
    availableDates: IAvailableDates[] | undefined;

    selectedTags: string[] = [];
    selectedAvailableDates: string[] = [];
    selectedAvailableTimes: string[] = [];

    // groups: IGroup[];
    // currentGroup: IGroup;
    // URL: string = "/catalog/";
    // DATA: string = 'currentGroup';
    // catalog$: Observable<ICatalog>;
    // task: ITask;
    //
    // ngOnInit(): void {
    //     this.catalog$ = this.tasksService.getAll();
    //
    //     this.catalog$.subscribe({
    //         next: (result: ICatalog): void => {
    //             this.groups = result.groups;
    //
    //             this.route.params.subscribe(params => {
    //                 this.currentGroup = (this.groups.find((group => {
    //                     return group.id == params['id'];
    //                 })) as IGroup);
    //             })
    //         },
    //         error: (error): void => {
    //             this.alertService.error(error.error);
    //         }
    //     });
    // }

    // topics = ['Ремонт в новостройке', 'Ремонт во вторичной квартире', 'Выбор материалов', 'Ремонт', 'Материал'];
    // selectedTopics: string[] = [];
    //
    // dates = ['16.11', '17.11'];
    // selectedDates: string[] = [];
    //
    // times = ['20:00', '21:00'];
    // selectedTimes: string[] = [];

    constructor(
        private consultationService: ConsultationService,
    ) {
    };

    ngOnInit() {
        this.consultationService.getConsultation().subscribe((data: IConsultation) => {
            this.tags = data.tags;
            this.availableDates = data.availableDates;
        });
    }

    toggleSelectionTags(tag: ITag) {
        const index = this.selectedTags.indexOf(tag.name);
        if (index === -1) {
            this.selectedTags.push(tag.name);
        } else {
            this.selectedTags.splice(index, 1);
        }
    }

    isSelectedTags(tag: ITag) {
        return this.selectedTags.includes(tag.name);
    }

    toggleSelectionAvailableDates(availableDates: IAvailableDates) {
        const index = this.selectedAvailableDates.indexOf(availableDates.date);
        if (index === -1) {
            this.selectedAvailableDates.push(availableDates.date);
        } else {
            this.selectedAvailableDates.splice(index, 1);
        }
    }

    isSelectedAvailableDates(availableDates: IAvailableDates) {
        return this.selectedAvailableDates.includes(availableDates.date);
    }

    toggleSelectionAvailableTimes(availableDates: IAvailableDates) {
        const index = this.selectedAvailableTimes.indexOf(availableDates.times[0]);
        if (index === -1) {
            this.selectedAvailableTimes.push(availableDates.times[0]);
        } else {
            this.selectedAvailableTimes.splice(index, 1);
        }
    }

    isSelectedAvailableTimes(availableDates: IAvailableDates) {
        return this.selectedAvailableTimes.includes(availableDates.times[0]);
    }
}
