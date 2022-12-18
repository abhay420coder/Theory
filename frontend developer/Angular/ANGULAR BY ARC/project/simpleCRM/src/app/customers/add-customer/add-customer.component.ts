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

  firstName :any;
  lastName :any;
  OK:any;
  radio:any=false;
  podsArr:any;
  statusArr:any;
  foodArr:any;
  customerType:any;
  togglevalue:any;
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


  /* 
  interface Food {
  value: string;
  viewValue: string;
}
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  */
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  
  ngOnInit(): void {
  }

  submitFormFunctionName(formsValue:NgForm){
    console.log("formsValue.form.value  :-  ",formsValue.form.value)
    console.log("formsValue.value  :-  ",formsValue.value)

    // validations
    // data processing
    // then call API to save this data
  }

}
