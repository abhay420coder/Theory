import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.scss']
})
export class RxJSLearningComponent implements OnInit {

  // simple_Observable : Observable<string> | undefined;
  // simple: string | undefined;


  
  /* 
  // of  Operators
  // students_List_Observable_For_Of_Operator : Observable<String[]> = of(['MarK' , 'Ram' , 'Sita',  'Lisa']);
  // or
  
  students_List_For_Of_Operator = ['MarK' , 'Ram' , 'Sita',  'Lisa'];
  students_List_Observable_For_Of_Operator : Observable<String[]> = of(this.students_List_For_Of_Operator);

  students_String_For_Of_Operator = 'Arc Tutorial';
  students_String_Observable_For_Of_Operator : Observable<String> = of(this.students_String_For_Of_Operator);

  // in enterPrise we are using $ at the end of object-variable-name like 
  // students_Object_For_Of_Operator$
  students_Object_For_Of_Operator = {Ram:'Boy', Sita:'Girl' , Mark:'Boy'};
  students_Object_Observable_For_Of_Operator : Observable<Object> = of(this.students_Object_For_Of_Operator);
  // students_Object_Observable_For_Of_Operator : Observable<any> = of(this.students_Object_For_Of_Operator);
  // if you are using <Object>  then it will take only Object 
  // if you use <any>    then it will take any :- Array ,String Object ,.. etc

 */

  
  /*  
  // from  Operators
  // students_List_For_From_Operator : Observable<String> = from(['Fashion' , 'Electronics' , 'Mobile',  'HouseHold']);
  // or
  students_List_For_From_Operator = ['Fashion' , 'Electronics' , 'Mobile',  'HouseHold'];
  students_List_Observable_For_From_Operator : Observable<String> = from(this.students_List_For_From_Operator); 
  */


/*   
// fromEvent Operators
   clicks = fromEvent<PointerEvent>(document, 'click');
   // map opeartors
   positions = this.clicks.pipe(map(ev => ev.clientX));
 */
  
   @ViewChild('validate')
   validate:ElementRef | undefined;


  constructor() { }

  ngOnInit(): void {
    // simple Observable
       
/* 

    this.simple_Observable = new Observable(
      function(observer){
        try{
          // observer.next('Ram');
          // observer.next('Mark');
          // observer.next('Sita');

          // you can see the observable returning all data
          setInterval(()=>{
            observer.next('Ram');
          },3000);

          setInterval(()=>{
            observer.next('Mark');
          },6000);

          setInterval(()=>{
            observer.next('Sita');
          },9000)

          
          // wherever we have period of time , then we have emit 3 value.
          
        }
        catch(e){
          // if there is something wrong here to get data then
          observer.error(e);

        }
      }
    )

    // observable is useless , unless you subcribe to it
    this.simple_Observable.subscribe(data => {
      console.log('simple_Observable :-  ',data);
      this.simple=data;
    }) 
 */

/* 
    // Of Observable
    this.students_List_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_List_Observable_For_Of_Operator :-  " , data);
    })
    this.students_String_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_String_Observable_For_Of_Operator :- " , data);
    })
    this.students_Object_Observable_For_Of_Operator.subscribe(data=>{
      console.log("students_Object_Observable_For_Of_Operator :- " , data);
    }) */


    
    /* 
    // from Observable
    this.students_List_Observable_For_From_Operator.subscribe(data=>{
      console.log("students_List_Observable_For_From_Operator :- " , data);
    })
 */



  /*     
    // fromEvent opeartors
    this.clicks.subscribe(x => console.log("clicks :-   ",x));
    // map opeartors
    this.positions.subscribe(x => console.log("clicks clientX:-   ",x));
 */
 
  }
// ngOnInit end





rxJs_Event_operator(){
  const button_observable =  fromEvent(this.validate?.nativeElement,'click')
}












}
