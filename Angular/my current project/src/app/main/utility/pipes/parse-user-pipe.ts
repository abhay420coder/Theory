import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "parseusername"
})

export class ParseUserName implements PipeTransform {
    transform(value: any, userData: any[]) {
        const empId = value.split(":")[0];
        const empInfo = userData.filter((dt: any) => {
            if (dt) {
                return dt.employeeId.toString() === empId
            }
            return false
        })[0];
        return empInfo && empInfo.employeeName ? empInfo.employeeName : "Unknown";
    }
}