import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "../../../../environments/environment";

@Pipe({
  name: 'validateImgLink'
})
export class ImgLinkValidatorPipe implements PipeTransform {
  constructor(private http: HttpClient){}

  transform(url: any, type?: any, imgSrc?: string): Observable<string> {
    const ret = this.http.get(url, {observe: "response", responseType: "text"}).pipe(
      map(response=>{
        return url;      
      }),
      catchError(err=>{
        const path = '/assets/icons';
        if(type){
          type = type.toUpperCase();
        }
        switch(type){
          case "SERVICE":
            return of(path + "/services/unknown-default.svg");
          default:
            return of(path + "/services/unknown-default.svg");
        }
      })
    )
    return ret;
  }

}
