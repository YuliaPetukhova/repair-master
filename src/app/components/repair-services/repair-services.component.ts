import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../main/menu/menu.component";
import {NgClass, NgForOf} from "@angular/common";
import {ConsultationService} from "../../services/consultation.service";
import {IConsultation} from "../../models/IConsultation";
import {ITag} from "../../models/ITag";
import {IAvailableDates} from "../../models/IAvailableDates";
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
    selector: 'app-repair-services',
    templateUrl: './repair-services.component.html',
    styleUrls: ['./repair-services.component.scss'],
    imports: [
        MenuComponent,
        NgForOf,
        NgClass,
        ReactiveFormsModule
    ],
    standalone: true
})
export class RepairServicesComponent implements OnInit {

    tags: ITag[] | undefined;
    availableDates: IAvailableDates[] | undefined;

    selectedTags: string[] = [];
    selectedAvailableTimes: string[] = [];

    myFormConsultation!: FormGroup;
    consultation: IConsultation | undefined;

    constructor(
        private consultationService: ConsultationService,
        ) {
    };

    ngOnInit() {
        this.consultationService.getConsultation().subscribe((data: IConsultation) => {
            this.tags = data.tags;
            this.availableDates = data.availableDates;
        });

        this.myFormConsultation = new FormGroup({
            tags: new FormControl<ITag[]>([]),
            availableDates: new FormControl<IAvailableDates[]>([]),
            availableTimes: new FormControl<string[]>([]),
            comment: new FormControl('')
        });

        this.myFormConsultation.valueChanges.subscribe(formValue => {
            console.log('Form values:', formValue);
        });
    };


    toggleSelectionTags(tag: ITag) {
        const selectedTags = this.myFormConsultation.get('tags')?.value;
        const index = selectedTags?.indexOf(tag.name);
        if (index === -1) {
            this.selectedTags.push(tag.name);
        } else {
            this.selectedTags.splice(index, 1);
        }
        console.log(this.selectedTags);

        // this.myFormConsultation.get('selectedTags')?.setValue(tag.name);
    }

    isSelectedTags(tag: ITag) {
        return this.selectedTags.includes(tag.name);
    }

    // toggleSelectionAvailableDates(availableDates: IAvailableDates) {
    //     const index = this.selectedAvailableDates.indexOf(availableDates.date);
    //     if (index === -1) {
    //         this.selectedAvailableDates.push(availableDates.date);
    //     } else {
    //         this.selectedAvailableDates.splice(index, 1);
    //     }
    // }
    //
    // isSelectedAvailableDates(availableDates: IAvailableDates) {
    //     return this.selectedAvailableDates.includes(availableDates.date);
    // }

    toggleSelectionAvailableTime(time: string) {
        const index = this.selectedAvailableTimes.indexOf(time);
        if (index === -1) {
            this.selectedAvailableTimes.push(time);
        } else {
            this.selectedAvailableTimes.splice(index, 1);
        }
    }

    isSelectedAvailableTime(time: string) {
        // return this.myFormConsultation.get('selectedTime')?.value === time;

        return this.selectedAvailableTimes.includes(time);
    }

    submitForm() {
        console.log(this.myFormConsultation.value);
    }


    // form: FormGroup;
    // checkboxesData = ['Option 1', 'Option 2', 'Option 3']; // Данные для чекбоксов
    //
    // constructor(private fb: FormBuilder) {
    //     this.form = this.fb.group({
    //         checkboxes: this.fb.array([])
    //     });
    //
    //     this.addCheckboxes();
    // }
    //
    // private addCheckboxes() {
    //     this.checkboxesData.forEach(() => this.checkboxArray.push(this.fb.control(false)));
    // }
    //
    // get checkboxArray() {
    //     return this.form.get('checkboxes') as FormArray;
    // }
    //
    // submit() {
    //     const selectedCheckboxes = this.form.value.checkboxes
    //         .map((checked: any, index: any) => checked ? this.checkboxesData[index] : null)
    //         .filter((value: null) => value !== null);
    //     console.log(selectedCheckboxes);
    // }
}
