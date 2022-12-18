import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "statuscolor"
})

export class StatusColorPipe implements PipeTransform{
    transform(value: string) {
        if(!value) return;
        value = value.toUpperCase();
        return {
            '_green-text': value === 'SUCCESS', 
            '_red-text' : value === 'FAILED' ,
            '_blue-text': value === 'PENDING'
        }
    }
}