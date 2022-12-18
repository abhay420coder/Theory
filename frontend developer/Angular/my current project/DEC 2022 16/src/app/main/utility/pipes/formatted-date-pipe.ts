import { Pipe, PipeTransform } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";

@Pipe({
    name: 'formatteddate',
    pure: true
})
export class FormattedDatePipe implements PipeTransform{
    constructor(private dateTime: DateTimeService){}

    transform(date: string, format: string, isUtc?: boolean){
        return this.dateTime.getFormattedDateTime(date, format, isUtc);
    }
}
