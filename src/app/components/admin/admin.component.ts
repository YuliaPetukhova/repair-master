import {Component, OnDestroy, OnInit} from '@angular/core';
import {ConsultationService} from "../../services/consultation.service";
import {Subscription} from "rxjs";
import {IConsultation} from "../../models/IConsultation";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true
})

export class AdminComponent implements OnInit, OnDestroy {
    consultation: IConsultation | undefined;
    subscription?: Subscription;

    constructor(
        private consultationService: ConsultationService,
    ) {
    }

    ngOnInit(): void {
        // this.subscription = this.route.params.subscribe(params => {
        //     this.consultation = this.consultationService.findTaskById(params['id'])!;
        // });
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }
}
