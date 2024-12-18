import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';
import {IConsultation} from "../models/IConsultation";

@Injectable({
    providedIn: 'root',
})
export class ConsultationService {
    getConsultation(): Observable<IConsultation> {
        console.log('1');
        return timer(1000).pipe(
            map((): IConsultation => {
                return {
                    tags: [
                        {
                            id: 1,
                            name: 'Ремонт'
                        },
                        {
                            id: 2,
                            name: 'Консультация'
                        },
                        {
                            id: 3,
                            name: 'Диагностика'
                        },
                        {
                            id: 4,
                            name: 'Другое'
                        }
                    ],
                    availableDates: [
                        {
                            date: '30 ноября',
                            times: ['10:00', '11:00', '12:00']
                        },
                        {
                            date: '31 ноября',
                            times: ['13:00', '14:00', '15:00']
                        }
                    ],
                };
            }));
    }
}
