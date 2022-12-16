import { Directive, ElementRef, Input } from '@angular/core';
import { globalUrls } from '../../urls';
import { ServiceIconList } from '../../constants'

@Directive({
  selector: '[dynamicBgIcon]'
})
export class DynamicBgIconDirective {

  @Input() dynamicBgIcon: string;

  fallbackImageUrl: string = globalUrls.fallbackIconUrl;
  constructor(private elementRef: ElementRef<HTMLDivElement>) { }

  ngOnInit(): void {
    //resIcon is an array which contains iconFileName.svg which is in URL:- dynamicBgIcon 
    let resIcon = this.dynamicBgIcon.split('/').filter(words=>words.includes(".svg"))
    if(ServiceIconList.includes(resIcon[0])){
       // image loaded so url is valid
        this.elementRef.nativeElement.style.background = `url(${this.dynamicBgIcon})`;  
    }else{
       // error! switch to fallback url
        this.elementRef.nativeElement.style.background = `url(${this.fallbackImageUrl})`;
    }
  }
}
