import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'multi-select-search',
  templateUrl: './multi-select-search.component.html',
  styleUrls: ['./multi-select-search.component.scss']
})
export class MultiSelectSearchComponent implements OnInit {
  @ViewChild('search') searchTextBox: ElementRef;
  @Input() itemList: any[];
  @Input() filterKey: string;
  @Input() title: string;
  @Input() applyClass: string;
  @Input() selected?: any[];
  @Output() callback: EventEmitter<any[]> = new EventEmitter<any[]>()

  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();

  selectedValues = [];
  filteredOptions: Observable<any[]>;
  options: any[] = [];

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    if(this.selected){
      this.selectFormControl.patchValue(this.selected);
      this.cd.detectChanges();
    }    
    this.filteredOptions = this.searchTextboxControl.valueChanges.pipe(
      startWith<string>(''),
      map(name => this._filter(name))
    );
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes?.itemList){
      this.options = changes.itemList.currentValue;
    }
    this.searchTextboxControl.patchValue("")
  }

  private _filter(name: string): String[] {
    const filterValue = name.toLowerCase();
    // Set selected values to retain the selected checkbox state 
    this.setSelectedValues();
    this.selectFormControl.patchValue(this.selectedValues);
    this.cd.detectChanges();
    let filteredList = this.options.filter(option => option[this.filterKey].toLowerCase().indexOf(filterValue) === 0);
    return filteredList;
  }

  setSelectedValues() {
    if (this.selectFormControl.value && this.selectFormControl.value.length > 0) {
      this.selectFormControl.value.forEach((e) => {
        if (this.selectedValues.indexOf(e) == -1) {
          this.selectedValues.push(e);
        }
      });
    }
  }

  clearSearch(event) {
    event.stopPropagation();
    this.searchTextboxControl.patchValue('');
  }

  selectionChange(event) {
    if (event.isUserInput && event.source.selected == false) {
      let index = this.selectedValues.indexOf(event.source.value);
      this.selectedValues.splice(index, 1)
    }
  }

  openedChange(e) {
    // Set search textbox value as empty while opening selectbox 
    this.searchTextboxControl.patchValue('');
    // Focus to search textbox while clicking on selectbox
    if (e == true) {
      this.searchTextBox.nativeElement.focus();
    }
  }

  valueSelected(event: any){
    this.callback.emit(event.value);
  }
}
