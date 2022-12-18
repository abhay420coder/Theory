import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {

    transform(value: string , seperator : string): unknown {
      if(value.includes(seperator)){
              return value.split(seperator).join(' ');
          }

      return value;  
    }
}
