import { Pipe, PipeTransform } from '@angular/core';
import { DbGlobalStatusDescription as desc } from '../db-global-status/DbGlobalStatusDescription'

@Pipe({
  name: 'globalStatusDescripton'
})
export class GlobalStatusDescriptonPipe implements PipeTransform {

  transform(value: string, obj:any ): unknown {

    // let key= value.split(seperator)
    //               .join(' ')
    //               .toLowerCase()
    //               .split(' ');
    //     key[0] = key[0][0].toUpperCase()+key[0].slice(1);
     
    // let res = key.join('_');

    let key = value.toLowerCase();
    let res = key[0].toUpperCase()+key.slice(1);
                
    return obj[res];
  }
}