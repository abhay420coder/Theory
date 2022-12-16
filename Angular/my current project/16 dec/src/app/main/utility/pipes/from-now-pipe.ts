import { Pipe, PipeTransform } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";

@Pipe({
    name: "fromnow",
    pure: true
})
export class FromNowPipe implements PipeTransform{
    constructor(private dateTime: DateTimeService){}
    transform(date: string, isUtc?: boolean){
        return this.dateTime.getFromNow(date, isUtc);
    }
}
