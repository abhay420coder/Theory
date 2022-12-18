import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "parsenodestatus"
})

export class ParseNodeStatusPipe implements PipeTransform {
    transform(value: any[]) {
        let status = false;
        value.map(d=>{
            if(d.type === "Ready"){
                if(d.status === "True"){
                    status = true;
                } else {
                    status = false;
                }
            }
        })
        return status?'success':'error';
    }
    
}