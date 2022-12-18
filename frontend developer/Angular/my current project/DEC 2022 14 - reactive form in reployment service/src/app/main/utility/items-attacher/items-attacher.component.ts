/****************************************************
 
    data["title"] = ""; //title of the dialog box
    data["avlItemFunc"] = this.getAvlServics.bind(this, obj);
    data["attachedItemFunc"] = this.getAttachedServcices.bind(this, obj);
    data["avlItemsObs"] = this.avlServiceObs;
    data["attachedItemObs"] = this.attachedServiceObs;
    data["filterBy"] = ["srId"];
    data["displayField"] = "serviceName";
    data["secondaryDisplayField"] = ["version","releaseNote"]  //IF PASSING ONLY ONE ITEM IN THE ARRAY, 
                                                        THE NEXT PARAMETER IS OPTIONAL. OTHERWISE IT IS NECESSERY
                                                        AND # IN THE STRING WILL BE REPLACED BY THE ITEMS
    
    data["seconderyString"] = "first value is # second value is #"
    data["isPagination"] = true;
    data["avlItemSearchMode"] = "online";
    data["atchItemSearchMode"] = "online";
    data["hasIcon"] = true;
 *******************************************************/
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-items-attacher',
  templateUrl: './items-attacher.component.html',
  styleUrls: ['./items-attacher.component.scss']
})
export class ItemsAttacherComponent implements OnInit, OnDestroy {

  @Input() inputData: any;
  @Output() outputData = new EventEmitter();
  @ViewChild('avlItems') avlItems: any;
  @ViewChild('attachedItems') attachedItems: any;
  avlItemList: any[] = [];
  filteredAvlItemList: any[] = [];
  attachedItemList: any[] = [];
  filteredAttachedItemList: any[] = [];

  itemSearchObs: BehaviorSubject<string> = new BehaviorSubject<string>("");
  attachedItemSearchObs: Subject<string> = new Subject<string>();
  searchData: String = '';
  attachedSearchData: string = '';
  avlItemListLoading: boolean = false;
  attachedItemListLoading: boolean = false;
  loaderItems = [{
    noOfRows: new Array(25),
    items: ['image', '80%']
  }];
  // translationVar;
  sharedVar: any;
  avlApiCalled: boolean = false;
  attachedApiCalled: boolean = false;
  isTouched: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.itemSearchObs.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchKey => {
        this.searchData = searchKey;
        if (this.inputData['avlItemSearchMode'] === 'offline') {
          const avlList = this.removeSelectedItemFromAvl();
          this.filteredAvlItemList =
            avlList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
        } else {
          searchKey ? this.inputData['avlItemFunc'](searchKey) : this.inputData['avlItemFunc']({ refresh: true });
        }
        return [];
      })
    ).subscribe();

    this.attachedItemSearchObs.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchKey => {
        if (this.inputData['atchItemSearchMode'] === 'online') {
          this.attachedSearchData = searchKey;
          searchKey ? this.inputData['attachedItemFunc'](searchKey) : this.inputData['attachedItemFunc']({ refresh: true });
        } else {
          this.filteredAttachedItemList =
            this.attachedItemList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
        }
        return [];
      })
    ).subscribe();

    // Subscribe for already existing item
    this.attachedItemListLoading = true;
    // tslint:disable-next-line: no-unused-expression
    <Subject<any[]>>this.inputData['attachedItemObs'].subscribe(item => {
      if(item.length===0){
        this.attachedItemList = [];
      }      
      const unsavedList = this.attachedItemList;
      this.attachedItemListLoading = false;
      this.attachedItemList = item.filter(data => data);
      if(this.isTouched){
        let unatchedItems = [];
        unsavedList.map(d=>{
          if(!this.attachedItemList.filter(s=>s.srId===d.srId).length){
            unatchedItems.push(d);
          }
        });
        this.attachedItemList = this.attachedItemList.filter(d=>unatchedItems.filter(us=>us.srId===d.srId).length===0);
        this.attachedItemList = [...this.attachedItemList, ...unatchedItems];
      }
      this.filteredAttachedItemList = this.attachedItemList;
      
      if (this.inputData['attachedListRef']) {
        this.inputData['attachedListRef'] = this.attachedItemList;
      }
      this.removeSelectedItemFromAvl();
      this.attachedApiCalled = false;
      this.checkAttachedScrollability();
    });

    this.avlItemListLoading = true;
    // tslint:disable-next-line: no-unused-expression
    <Subject<any[]>>this.inputData['avlItemsObs'].subscribe(item => {
      this.avlItemUpdate(item);
      // this.removeSelectedItemFromAvl();
      this.avlItemListLoading = false;
      this.avlApiCalled = false;
    });

    this.inputData['attachedItemFunc']({ refresh: true });
    if (this.inputData['avlItemSearchMode'] === 'offline') {
      this.inputData['avlItemFunc']({ refresh: true });
    } else {
      this.itemSearchObs.next('');
    }
  }
  checkAvlScrollability(): void {
    if(this.avlItems){
      if(this.filteredAvlItemList.length>0 &&
        this.filteredAvlItemList.length*51 < this.avlItems.nativeElement.offsetHeight &&
        !this.avlApiCalled && !this.inputData['avlLastPage']){
        // console.log(this.avlItems.nativeElement.offsetHeight, this.filteredAvlItemList.length*51);
        if(this.inputData['isPagination']){
          this.avlApiCalled = true;
          this.inputData['avlItemFunc'](this.searchData)
        }
      }
    }
  }

  checkAttachedScrollability(): void {
    if(this.attachedItems){
      if(this.filteredAttachedItemList.length>0 &&
        this.filteredAttachedItemList.length*51 < this.attachedItems.nativeElement.offsetHeight &&
        !this.attachedApiCalled && !this.inputData['attachedLastPage']){
        if(this.inputData['isPagination']){
          this.attachedApiCalled = true;
          this.inputData['attachedItemFunc'](this.attachedSearchData);
        }
      }
    }
  }

  ngOnDestroy() {
    this.itemSearchObs.unsubscribe();
    this.attachedItemSearchObs.unsubscribe();
    // this.data['attachedItemObs'].unsubscribe();
    // this.data['avlItemsObs'].unsubscribe();
  }

  avlItemUpdate(apiResponse) {
    this.avlItemList = apiResponse;
    this.removeSelectedItemFromAvl();
    if (this.inputData['scrollPagination'] ) { // in case of update if avlitems are less than height, then we cannot scroll to
      // get more avl items hence we are calling scroll method
    this.inputData['scrollPagination'](this.searchData, true);
    }
  }

  // closeDialog() {
  //   this.dialogRef.close('cancel');
  // }

  removeSelectedItemFromAvl() {
    if (this.inputData['filterBy']) {
      this.filteredAvlItemList = this.avlItemList.filter(data => {
        let flag = false;
        for (const filterItem of this.inputData['filterBy']) {
          if (this.attachedItemList.map(item => item[filterItem]).indexOf(data[filterItem]) === -1) {
            flag = true;
          };
        }
        return flag;
      });
    } else {
      this.filteredAvlItemList = this.avlItemList.filter(data => {
        return this.attachedItemList.map(item => item['id']).indexOf(data['id']) === -1;
      });
    }
    // this.checkAvlScrollability();
    return this.filteredAvlItemList;
  }

  pushItem(item) {
    this.isTouched = true;
    this.attachedItemList.push(item);
    if (this.attachedItemList !== this.filteredAttachedItemList) {
      this.filteredAttachedItemList.push(item);
    }
    this.avlItemList.splice(this.avlItemList.indexOf(item), 1);
    if (this.inputData['avlItemSearchMode'] === 'offline') {
      const avlList = this.removeSelectedItemFromAvl();
      const searchKey = this.itemSearchObs.value;
      this.filteredAvlItemList =
        avlList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
    } else {
      this.removeSelectedItemFromAvl();
    }
    if (this.inputData['isDialog']) {
      this.attachItems();
    }
  }

  removeItem(item) {
    this.isTouched = true;
    this.attachedItemList.splice(this.attachedItemList.indexOf(item), 1);
    if (this.attachedItemList !== this.filteredAttachedItemList) {
      this.filteredAttachedItemList.splice(this.filteredAttachedItemList.indexOf(item), 1);
    }
    this.avlItemList.unshift(item)
    if (this.inputData['avlItemSearchMode'] === 'offline') {
      const avlList = this.removeSelectedItemFromAvl();
      const searchKey = this.itemSearchObs.value;
      this.filteredAvlItemList =
        avlList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
    } else {
      this.removeSelectedItemFromAvl();
    }
    if (this.inputData['isDialog']) {
      this.attachItems();
    }
    console.log(this.avlItemList);    
    this.checkAttachedScrollability();
  }

  attachItems() {
    this.outputData.emit(this.attachedItemList);
  }

  scrollPagination(searchKey) {
    if (this.inputData['scrollPagination']) {
    this.inputData['scrollPagination'](searchKey);
    } else {
    this.inputData['avlItemFunc'](searchKey ? searchKey : '');
    }
    }

  refreshList() {
    this.isTouched = false;
    this.inputData['avlItemFunc']({ refresh: true });
    this.inputData['attachedItemFunc']({ refresh: true });
  }
}

@Pipe({name: 'seconderytext'})
export class SeconderyTextPipe implements PipeTransform{
  transform(data: any, keys: any[], template: string){
    var text:string = template;
    keys.map(d=>{
      const index = text.indexOf("#");
      text = text.slice(0, index) + (data[d]?data[d]:'n/a') + text.slice(index+1);
    })
    return text;
  }
}