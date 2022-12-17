import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  firstName :string=" ";
  lastName :string=" ";
  OK :string="OK"
  radio:string="Radio Button";

  status: any = [
    { name: "Success", value: "SUCCESS" },
    { name: "Error", value: "FAILED" },
    { name: "Pending", value: "PENDING" },
  ];
  pods: any = [
    { name: "All Ready", value: "allReady" },
    { name: "Zero Ready", value: "zeroReady" },
    { name: "Partial Ready", value: "partialReady" },
  ];

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

  addCustormer(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)
  }

}
