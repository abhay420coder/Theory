import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "isselected"
})

export class IsSelectedPipe implements PipeTransform {
    transform(value: string, list: string[]) {
        return list.includes(value);
    }
}