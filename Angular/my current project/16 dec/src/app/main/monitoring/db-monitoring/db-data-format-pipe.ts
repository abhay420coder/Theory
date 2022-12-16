import { Pipe, PipeTransform } from "@angular/core";
import { DateTimeService } from "src/app/services/date-time.service";


@Pipe({
    name: "dbmonitoringdata"
})

export class DbMonitoringDataFormatPipe implements PipeTransform{
    
    constructor(private dateTime: DateTimeService){}

    transform(value: any, column: string, timeColumns: string[], timerColumns: string[], dataColumns) {
        if(timeColumns.includes(column)){
            const dateStamp = this.dateTime.getDatestampFromUnixStamp(value[column]);
            return this.dateTime.getFormattedDateTime(dateStamp, "MMM D, YYYY h:mm:ss.SSS A", true);
        } else if (timerColumns.includes(column)) {
            return this.dateTime.getDurationFromMs(value[column])
        } else if (dataColumns.includes(column)) {
            return this.formatBytes(value[column]);
        }
        return value[column];
    }

    formatBytes(bytes:number) {
        if (!+bytes) return '0'
        const k = 1024
        const decimals = 3
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    
        const i = Math.floor(Math.log(bytes) / Math.log(k))
    
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
}