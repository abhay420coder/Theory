# Topic

30  Pipes in Angular
31  Built-In Pipes in Angular
32` Parametrized Pipes in Angular
33  Chaining Pipes in Angular

# Pipes

## pipes by ARC

### introduction

* Pipes are used to transform the data
* Pipes will take data input and convert/transform into a desired format
* Pipes are written using the pipe operator `(|)`
* We can apply pipes to any view/template and to any data inputs.

### Types of Pipes

#### Built in Pipes

* Lowercase
* Uppercase
* Currency
* Date
  
#### Parametrized Pipes

* We can pass one or more parameters to pipes
  
#### Chaining Pipes

* We can connect multiple pipes to a data input
  
#### Custom Pipes

* We can create our own custom pipes for various data formatting.

## pipes by Angular.io

### What is a pipe

* Pipes are simple functions to use in template expressions to accept an input value and return a transformed value.
* Pipes are useful because you can use them throughout your application, while only declaring each pipe once.
* For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.

# Built-In Pipes

## Built-In Pipes by ARC

### types of Built-in Pipes

* Lowercase
* Uppercase
* Percent
* Currency
* Date
* JSON

### important points

1. Pipe is used to transform the input data into ouput desired format

2. **Built in pipes** - we use them in templates

3. We can use multiple pipes in the template on elements

4. **Syntax is**
    * `<div> {{ <input_data> | <name_of_pipe> }} </div>`

4. Built-In Pipes which are readily available for us to use

    * lowercase
        * saving usernames/email_address
            * lowercase
    * uppercase
        * currency
        * Airport Codes

    * date
        * by default `mm, dd, yyyy`

    * json
        * I use this specially for debug purpose
        * showing `<code>`

    * currency
        * by default uses dollar symbol `$`

    * percent
        * by Default is rounding to near by integer
        * multiple by `100` and add `%` symbol

### example :- 

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<input type="text"  [(ngModel)]="userName">

<h1 *ngIf="userName.length > 10"> userName :-  {{ userName }}</h1>


<!-- Angular Built-in Pipes -->

<h3>Bui1t-In Pipes</h3>
<div>lowercase Pipe :- {{ lowerCaseExamp1e | lowercase  }}</div>
<div>uppercase Pipe :- {{ upperCaseExamp1e | uppercase  }}</div>
<div> date Pipe :- {{ dateExampIe | date }}</div>
<div> Json Pipe :- {{ jsonExamp1e | json }}</div>
<div> currencyExample Pipe :- {{ currencyExample | currency }} </div>
<div> percentExample Pipe :- {{ percentExample | percent }} </div>
```

**app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  userName = ""

  lowerCaseExamp1e = "ARC TUTORIALS";
  upperCaseExamp1e = "learn ANgular framework tutorials";
  dateExampIe = Date.now();
  jsonExamp1e = {username: "arc" , major: "Angular" , experience : "lem"}
  currencyExample = 125
  percentExample = 0.6767

}
```

![Built in pipes    :-   view ](./image%20-%20005%20Pipes%20in%20ANgular/2022-11-24-05-28-18.png)

## Built-In Pipes by Angular.io

### Built-in pipes

* Angular provides built-in pipes for typical data transformations,
  * including transformations for internationalization (i18n),
  * which use locale information to format data.

* The following are commonly used built-in pipes for data formatting:

* **DatePipe**:
  * Formats a date value according to locale rules.
* **UpperCasePipe**:
  * Transforms text to all upper case.
* **LowerCasePipe**:
  * Transforms text to all lower case.
* **CurrencyPipe**:
  * Transforms a number to a currency string, formatted according to locale rules.
* **DecimalPipe**:
  * Transforms a number into a string with a decimal point, formatted according to locale rules.
* **PercentPipe**:
  * Transforms a number to a percentage string, formatted according to locale rules.
  
> * **Note  :-**
> * For a complete list of built-in pipes, see the pipes API documentation.
> * To learn more about using pipes for internationalization (i18n) efforts,
>   * see formatting data based on locale.
> * Create pipes to encapsulate custom transformations and use your custom pipes in template expressions.

### Pipes and precedence

* The pipe operator has a higher precedence than the ternary operator `(?:)`,
  * which means `a ? b : c | x` is parsed as `a ? b : (c | x)`.
* The pipe operator cannot be used without parentheses in the first and second operands of `?:`.

* Due to precedence,
  * if you want a pipe to apply to the result of a ternary,
    * wrap the entire expression in parentheses;
  * for example, `(a ? b : c) | x`.

**src/app/precedence.component.html**

```html
<!-- use parentheses in the third operand so the pipe applies to the whole expression -->
{{ (true ? 'true' : 'false') | uppercase }}
```

### Using a pipe in a template
* To apply a pipe, 
  * use the pipe operator `(|)` within a template expression 
    * as shown in the following code example, 
    * along with the name of the pipe, 
      * which is `date` for the built-in `DatePipe`.

#### The tabs in the example show the following:

* `app.component.html` uses `date` in a separate template to display a birthday.
* `hero-birthday1.component.ts` uses the same pipe as part of an in-line template in a component that also sets the birthday value.

**src/app/app.component.html**

```html
<p>The hero's birthday is {{ birthday | date }}</p>
```

**src/app/hero-birthday1.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: "<p>The hero's birthday is {{ birthday | date }}</p>"
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
}
```
The component's `birthday` value flows through the pipe operator, `|` to the `date` function.

# Parametrized Pipes in Angular

## Parametrized Pipes by ARC

* We can pass one or more parameters to pipes
* We pass parameters using the colon symbol `(:)`
  * Currency
    * Currency symbol
    * Currency Code
    * Currency Digit variations
  * Date
    * '`short`': equivalent to '`M/d/yy, h:mm a`' (6/15/15, 9:03 AM).
    * '`medium`': equivalent to '`MMM d, y, h:mm:ss a`' (Jun 15, 2015, 9:03:01 AM).
    * '`long`': equivalent to '`MMMM d, y, h:mm:ss a z`' (June 15, 2015 at 9:03:01 AM GMT+I).
    * '`full`': equivalent to '`IEEEE, MMMM d, y, a zzzz`' (Monday, June 15, 2015 at AM GMT+OI:OO).
    * '`shortDate`': equivalent to '`M/d/yy`' (6/15/15).
    * '`mediumDate`': equivalent to '`MMM d, y`' (Jun 15, 2015).
    * '`longDate`': equivalent to '`MMMM d, y`' (June 15, 2015).
    * '`fullDate`': equivalent to `IEEEE, MMMM d, y`' (Monday, June 15, 2015).
    * '`shortTime`': equivalent to '`h:mm a`' (9:03 AM).
    * '`mediumTme`': equivalent to '`h:mm:ss a`' (9:03:01 AM).
    * '`longTime`': equivalent to '`h:mm:ss a z`' (9:03:01 AM GMT+I).
    * '`fullTime`': equivalent to '`h:mm:ss a zzzz`' (9:03:01 AM GMT+OI 90).

#### currency

**syntax** :- `variableName | currency : 'isoCurrencyCode`

#### number

* **syntax** :- `variableName | number:'numOfDigBefDec.minNumOfDigAfDec-maxNumOfDigAfDec'`

  * numOfDigBefDec :- numberOfDigitsBeforeDecimal
  * minNumOfDigAfDec :- minimumNumberOfDigitsAfterDecimal
  * maxNumOfDigAfDec :- maximumNumberOfDigitsAfterDecimal
  * you can put directly value instead of variableName
* **syntax** :- `variableName | number:'numberOfDigitsBeforeDecimal.minimumNumberOfDigitsAfterDecimal-maximumNumberOfDigitsAfterDecimal'
`
* you can put directly value instead of variableName
* 
#### percent

* **syntax** :- `variableName | percent:'numOfDigBefDec.minNumOfDigAfDec-maxNumOfDigAfDec'`

  * _**numOfDigBefDec**_ :- numberOfDigitsBeforeDecimal
  * _**minNumOfDigAfDec**_ :- minimumNumberOfDigitsAfterDecimal
  * _**maxNumOfDigAfDec**_ :- maximumNumberOfDigitsAfterDecimal
  * you can put directly value instead of variableName
  
* **syntax** :- `variableName | percent:'numberOfDigitsBeforeDecimal.minimumNumberOfDigitsAfterDecimal-maximumNumberOfDigitsAfterDecimal'
`
* you can put directly value instead of variableName

#### date

* **syntax** :- `variableName | date:'format'`

* format :- 
    * '`short`': equivalent to '`M/d/yy, h:mm a`' (6/15/15, 9:03 AM).
    * '`medium`': equivalent to '`MMM d, y, h:mm:ss a`' (Jun 15, 2015, 9:03:01 AM).
    * '`long`': equivalent to '`MMMM d, y, h:mm:ss a z`' (June 15, 2015 at 9:03:01 AM GMT+I).
    * '`full`': equivalent to '`IEEEE, MMMM d, y, a zzzz`' (Monday, June 15, 2015 at AM GMT+OI:OO).
    * '`shortDate`': equivalent to '`M/d/yy`' (6/15/15).
    * '`mediumDate`': equivalent to '`MMM d, y`' (Jun 15, 2015).
    * '`longDate`': equivalent to '`MMMM d, y`' (June 15, 2015).
    * '`fullDate`': equivalent to `IEEEE, MMMM d, y`' (Monday, June 15, 2015).
    * '`shortTime`': equivalent to '`h:mm a`' (9:03 AM).
    * '`mediumTme`': equivalent to '`h:mm:ss a`' (9:03:01 AM).
    * '`longTime`': equivalent to '`h:mm:ss a z`' (9:03:01 AM GMT+I).
    * '`fullTime`': equivalent to '`h:mm:ss a zzzz`' (9:03:01 AM GMT+OI 90).

#### slice

* **syntax** :- `variableName | slice:startingIndex:endingIndex`
  * here ending index is not included but starting index is included
  * slice from starting index to ending index
* **syntax** :- `variableName | slice:startingIndex`
  * slice from starting index to last index
* **syntax** :- `variableName | slice::endingIndex`
  * slice from 0 to ending index

### example :- 

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>

<input type="text"  [(ngModel)]="userName">

<h1 *ngIf="userName.length > 10"> userName :-  {{ userName }}</h1>

<!-- Angular Built-in Pipes -->

<h3>Bui1t-In Pipes</h3>
<div>lowercase Pipe :- {{ lowerCaseExamp1e | lowercase  }}</div>
<div>uppercase Pipe :- {{ upperCaseExamp1e | uppercase  }}</div>
<div> date Pipe :- {{ dateExampIe | date }}</div>
<div> Json Pipe :- {{ jsonExamp1e | json }}</div>
<div> currencyExample Pipe :- {{ currencyExample | currency }} </div>
<div> percentExample Pipe :- {{ percentExample | percent }} </div>

<h1> parameterized pipes </h1>
<div> currencyExample Pipe :- EURO  :- {{ currencyExample | currency : 'EUR' }} </div>
<div> currencyExample Pipe :- GREAT BRITAIN POUND :-  {{ currencyExample | currency : 'GBP' }} </div>
<div> currencyExample Pipe :- INDIAN RUPEES :-  {{ currencyExample | currency : 'INR' }} </div>
<div> currencyExample Pipe :- UNITED STATE DOLLARS  :-  {{ currencyExample | currency : 'USD' }} </div>
<div> currencyExample Pipe :- AUSTRALIAN DOLLARS    :-  {{ currencyExample | currency : 'AUD' }} </div>
<div> currencyExample Pipe :- BRAZIL  :-  {{ currencyExample | currency : 'BRL' }} </div>
<div> currencyExample Pipe :- MEXICO  :-  {{ currencyExample | currency : 'MXN' }} </div>
<div> currencyExample Pipe :- CANADIAN  DOLLARS :- {{ currencyExample | currency : 'CAD' }} </div>
<div> currencyExample Pipe :- CHIENESE YUHAN  :-  {{ currencyExample | currency : 'CNY' }} </div>

<div> date Pipe :- {{ dateExampIe | date }}</div>
<div> date Pipe :- with 'short' :-  {{ dateExampIe | date : 'short'}}</div>
<div> date Pipe :- with 'medium' :-  {{ dateExampIe | date : 'medium'}}</div>
<div> date Pipe :- with 'long' :-  {{ dateExampIe | date : 'long'}}</div>
<div> date Pipe :- with 'full' :-  {{ dateExampIe | date : 'full'}}</div>
<div> date Pipe :- with 'shortDate' :-  {{ dateExampIe | date : 'shortDate'}}</div>
<div> date Pipe :- with 'mediumDate' :-  {{ dateExampIe | date : 'mediumDate'}}</div>
<div> date Pipe :- with 'longDate' :-  {{ dateExampIe | date : 'longDate'}}</div>
<div> date Pipe :- with 'fullDate' :-  {{ dateExampIe | date : 'fullDate'}}</div> 
<div> date Pipe :- with 'shortTime' :-  {{ dateExampIe | date : 'shortTime'}}</div>
<div> date Pipe :- with 'mediumTime' :-  {{ dateExampIe | date : 'mediumTime'}}</div>
<div> date Pipe :- with 'longTime' :-  {{ dateExampIe | date : 'longTime'}}</div>
<div> date Pipe :- with 'fullTime' :-  {{ dateExampIe | date : 'fullTime'}}</div>

<!-- numbers pipe -->
<div> number Pipe:-  {{5.678 | number:'1.2-3' }}</div >      <!-- 5.678 -->
<div> number Pipe:-   {{5.678 | number:'3.4-5' }}</div>      <!-- 005.6780 -->
<div> number Pipe:-   {{5.678 | number:'3.1-2' }}</div>      <!-- 005.68 -->

<!-- numbers pipe -->
<div> percent Pipe:-  {{5.678 | percent:'1.2-3' }}</div >      <!-- 567.80% -->
<div> percent Pipe:-   {{5.678 | percent:'3.4-5' }}</div>      <!-- 567.8000% -->
<div> percent Pipe:-   {{5.678 | percent:'3.1-2' }}</div>      <!-- 567.8% -->
```

**app.component.ts**

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>{{title}}</h1>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'simpleCRM';

  userName = ""

  lowerCaseExamp1e = "ARC TUTORIALS";
  upperCaseExamp1e = "learn ANgular framework tutorials";
  dateExampIe = Date.now();
  jsonExamp1e = {username: "arc" , major: "Angular" , experience : "lem"}
  currencyExample = 125
  percentExample = 0.6767
}
```

![parameterized pipe    :-  view1](./image%20-%20005%20Pipes%20in%20ANgular/2022-11-24-12-09-15.png)

![parameterized pipe    :-  view2](./image%20-%20005%20Pipes%20in%20ANgular/2022-11-24-12-09-32.png)

## Parametrized Pipes by Angular.io

### Transforming data with parameters and chained pipes

* Use optional parameters to fine-tune a pipe's output. 
* For example, use the `CurrencyPipe` with a country code such as EUR as a parameter. 
* The template expression `{{ amount | currency:'EUR' }}` transforms the `amount` to currency in euros. 
* Follow the pipe name (`currency`) with a colon (`:`) and the parameter value (`'EUR'`).

* If the pipe accepts multiple parameters, separate the values with colons. 
* For example, 
  * `{{ amount | currency:'EUR':'Euros '}}` adds the second parameter, 
    * the string literal `'Euros'`, to the output string. 
* Use any valid template expression as a parameter, 
  * such as a string literal or a component property.

* Some pipes require at least one parameter and allow more optional parameters, 
  * such as `SlicePipe`. 
* For example, 
  * `{{ slice:1:5 }}` creates a new array or string containing a subset of the elements 
    * starting with element `1` 
    * and ending with element `5`.

### Example: Formatting a date

* The tabs in the following example demonstrates toggling between two different formats (`'shortDate'` and `'fullDate'`):

  * The `app.component.html` template uses a format parameter for the `DatePipe` (named `date`) to show the date as **04/15/88**.
  * The `hero-birthday2.component.ts` component binds the pipe's format parameter to the component's `format` property in the `template` section, 
    * and adds a button for a click event bound to the component's `toggleFormat()` method.
  * The `hero-birthday2.component.ts` component's `toggleFormat()` method toggles the component's `format` property between a short form (`'shortDate'`) and a longer form (`'fullDate'`).


**src/app/app.component.html**

```html
<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>
```

**src/app/hero-birthday2.component.ts (template)**

```ts
template: `
  <p>The hero's birthday is {{ birthday | date:format }}</p>
  <button type="button" (click)="toggleFormat()">Toggle Format</button>
`
```

**src/app/hero-birthday2.component.ts (class)**

```ts
export class HeroBirthday2Component {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }
}
```

Clicking the **Toggle Format** button alternates the date format between **04/15/1988** and **Friday, April 15, 1988**.


### Example: Applying two formats by chaining pipes

* Chain pipes so that the output of one pipe becomes the input to the next.

* In the following example, 
  * chained pipes first apply a format to a date value, 
  * then convert the formatted date to uppercase characters. 
* The first tab 
  * for the `src/app/app.component.html` template chains `DatePipe` and `UpperCasePipe` 
    * to display the birthday as **APR 15, 1988**. 
* The second tab 
  * for the `src/app/app.component.html` template passes the `fullDate` parameter to `date` 
    * before chaining to `uppercase`, 
    * which produces **FRIDAY, APRIL 15, 1988**.

**src/app/app.component.html (1)**

```html
The chained hero's birthday is
{{ birthday | date | uppercase}}
```

**src/app/app.component.html (2)**

```html
The chained hero's birthday is
{{  birthday | date:'fullDate' | uppercase}}
```

# Chaining Pipes in Angular

## Chaining Pipes by ARC    

### introduction 

* Using multiple pipes on a data input is called as Chaining Pipes
* We can pass one or more pipes to a data input
* `{{ dob | date | uppercase }}`

### example :- 

**app.component.html**

```html
<h1 class="c1">{{title}}</h1>
<h4> Angular Chaining Pipes </h4>
<div> date Pipe :- {{ dateExampIe | date | uppercase }}</div>
<div> currencyExample Pipe :- CANADIAN  DOLLARS :- {{ currencyExample | currency : 'CAD' | lowercase}} </div>
```

**app.component.ts**

```ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simpleCRM';
  dateExampIe = Date.now();
  currencyExample = 125
}
```

![chaining pipes view   :-  ](./image%20-%20005%20Pipes%20in%20ANgular/2022-11-24-14-09-24.png)


