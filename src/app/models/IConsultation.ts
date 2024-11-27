import {IAvailableDates} from "./IAvailableDates";
import {ITag} from "./ITag";

export interface IConsultation {
    tags: ITag[];
    availableDates: IAvailableDates[];
}
