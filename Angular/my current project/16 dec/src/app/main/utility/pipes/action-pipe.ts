import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "deploymentaction"
})

export class DeploymentActionPipe implements PipeTransform{
    transform(value: string) {
        if(!value) return;
        let valueArr = value.split("_");
        if(valueArr.length>1){
            valueArr.splice(0, 1);
        }
        return valueArr.join(" ");
    }
}