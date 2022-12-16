import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { debounce, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchKey: Subject<string> = new Subject<string>();
  @Output() onChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.searchKey.pipe(
      debounce(()=>interval(300)),
      distinctUntilChanged()
    ).subscribe(data=>{
      this.onChange.emit(data);
    })
  }

  handleSearchKey(event:any){
    this.searchKey.next(event.target.value);
  }
}
