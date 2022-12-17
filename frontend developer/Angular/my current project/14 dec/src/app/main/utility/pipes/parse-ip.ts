import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "parseipfromstatus"
})

export class ParseIpFromStatusPipe implements PipeTransform {
    transform(value: any[]) {
        let ipAddress: string[] = [];
        value.map(d=>{
            if(d?.type==="InternalIP"){
                ipAddress.push(d.address);
            }
        })
        return ipAddress.join(", ");
    }
}