import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "employeename"
})

export class EmployeeNamePipe implements PipeTransform {
    transform(value: string, employeeData: any[]) {
        const empId = value?.split(":")[0];
        const empInfo = employeeData.filter((dt: any) => {
            if (dt) {
                return dt.employeeId.toString() === empId
            }
            return false
        })[0];
        return empInfo && empInfo.employeeName ? empInfo.employeeName : "Unknown";
    }
}