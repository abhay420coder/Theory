import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  
  /* 
  contacts =[
    {
      'firstName': ' ARC',
      'lastName': 'Tutorials' ,
    ' contact ld' : 1234
    },
    {
      'firstName': 'Mark',
      'lastName': 'Hender' ,
      'contact ld' : 67674
    },
    {
      'firstName': 'Ben',
      'lastName': 'Stokes' ,
      'contactld' : 3434
    }
  ]

  superHero = "SuperWomen"  ;
  category = "mobiles"  ;
  tax = 30  ;
  color = "yellow"  ;

  styleProp = "purple"  ;
  txtColor1 = 'blue' ;
  txtColor2 = 'green' ;

  styleClsProp='c3'
  conditionClsProp1='c4'
  conditionClsProp2='c6'

  getClsProp(){
    return 'c8'
  } 
  */
/* 
  page_heading = "Welcome to ARC Tutorials";  // string
  page_count = 10;  // number

  user_object = {  'firstName': 'ARC' , 'lastName': 'Tutorials'}  // object

  contacts =[
    { 'firstName': ' ARC' ,  'lastName': 'Tutorials' ,  'contactld'   :   1234     },
    { 'firstName': 'Mark' ,  'lastName': 'Hender'    ,  'contactld'   :   67674    },
    { 'firstName': 'Ben'  ,  'lastName': 'Stokes'    ,  'contactld'   :   3434     }
  ]

  isUserLoggedIn = true;

  imageUrl = "test.png" ;
  imageAlternativeName = "image alternative name"

  txtColor="red"

  colVal="2"

  eventBinding = false;
  sayHello(){
    console.log("Hello from ARC tutorial")
    this.eventBinding = !this.eventBinding
  }
  eventBindingForHighlight = false;
  higlightBlock =""
  highlightColor(){
    this.eventBindingForHighlight = !this.eventBindingForHighlight
    if(this.eventBindingForHighlight){
      this.higlightBlock=""
    }
    else{
      this.higlightBlock="c12"
    }
    console.log("i am beingğhighlighted")
  }

  inputBox(){
    console.log("this is input box");
  }
 */
  userName = ""

  lowerCaseExamp1e = "ARC TUTORIALS";
  upperCaseExamp1e = "learn ANgular framework tutorials";
  dateExampIe = Date.now();
  jsonExamp1e = {username: "arc" , major: "Angular" , experience : "lem"}
  currencyExample = 125
  percentExample = 0.6767

}
