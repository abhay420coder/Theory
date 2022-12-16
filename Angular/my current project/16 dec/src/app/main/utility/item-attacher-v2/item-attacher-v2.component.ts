/********************************************************************************
 * Item attacher component
 * 
 * This component can be used for attaching and detaching attributes of an entity
 * Input:
 * {
 *    isDialog: <boolean> If contained within a MatDialog,
 *    title: <string> "Title if in dialog mode",
 *    readOnly: <boolean> to render the component in read only mode
 *    avlItemFunc: <function()> function to fetch unattached items. It should return a promise resolving to {data: any[], lastPage: boolean},
 *    attachedItemFunc: <function()> function to fetch attached items. It should return a promise resolving to {data: any[], lastPage: boolean},
 *    filterBy: <string> Unique key of each attribute,
 *    displayField: <string> value of this key is displayed,
 *    seconderyString: <string> Template of secondery label
 *                      (Eg.: "Branch: #, Ver.: #, Note: #"),
 *    secondaryDisplayField: <string[]> keys to feed the above template, 
 *                      IF PASSING ONLY ONE ITEM IN THE ARRAY, THE ABOVE PARAMETER 
 *                      IS OPTIONAL. OTHERWISE IT IS NECESSERY AND # IN THE STRING 
 *                      WILL BE REPLACED BY THE ITEMS
 *    isPagination: <boolean> if pagination is present,
 *    avlItemSearchMode: <"online"|"offline"> search mode for unattached items,
 *    atchItemSearchMode: <"online"|"offline"> search mode for attached items,
 *    hasIcon: <boolean> attributes has icon,
 *    refreshTrigger: <Observable> Observable to trigger reset function,
 *    activeControlled: <boolean> if attachment/detachment controoled by actie key
 * }
 ********************************************************************************/


import { Component, EventEmitter, Input, OnInit, Output, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { debounce, delay, distinctUntilChanged, skip } from 'rxjs/operators';

@Component({
  selector: 'item-attacher-v2',
  templateUrl: './item-attacher-v2.component.html',
  styleUrls: ['./item-attacher-v2.component.scss']
})
export class ItemAttacherV2Component implements OnInit {

  @Input() inputData: any;
  @Output() outputData = new EventEmitter();
  @ViewChild('avlItems') avlItemsElement: any;
  @ViewChild('attachedItems') attachedItemsElement: any;

  //view control vars
  avlItemListLoading: boolean = false;
  avlPaginationLoading: boolean = false;
  attachedItemListLoading: boolean = false;
  attachedPaginationLoading: boolean = false;

  searchKey = {
    avl: "",
    attached: ""
  }
  avlLastPage: boolean = false;
  attachedLastPage: boolean = false;

  skeletonCount: any[] = new Array(3);

  //fresh dataset coming from api
  avlList = [];
  attachedList = [];

  //dataset holding user interactions
  avlSearchObs: BehaviorSubject<string> = new BehaviorSubject<string>("");
  attachedSearchObs: BehaviorSubject<string> = new BehaviorSubject<string>("");

  avlMod = [];
  avlListDisplay = [];
  attachedMod = [];
  attachedListDisplay = [];

  constructor() { }

  async ngOnInit(): Promise<void> {
    //reset trigger
    this.inputData['refreshTrigger'].subscribe(data=>{
      this.reset();
    })

    //available items search
    this.avlSearchObs.pipe(
      debounce(()=>interval(300)),
      distinctUntilChanged(),
      skip(1)
    ).subscribe(async data=>{
      if(this.inputData["avlItemSearchMode"] === "online"){
        this.avlList = [];
        await this.populateAvlList({refresh: true, searchKey: data});
        this.genAvlDirty();
      } else {
        //offline search is handled inside genAvlDirty() function
        this.genAvlDirty();
      }
    })

    //attached items search
    this.attachedSearchObs.pipe(
      debounce(()=>interval(300)),
      distinctUntilChanged(),
      skip(1)
    ).subscribe(async data=>{
      if(this.inputData["atchItemSearchMode"] === "online"){
        this.attachedList = [];
        await this.populateAttachedList({refresh: true, searchKey: data});
        this.genAttachedDirty();
      } else {
        //offline search is handled inside genAttachedDirty() function
        this.genAttachedDirty();
      }
    })

    this.avlItemListLoading = true;
    this.attachedItemListLoading = true;
    await this.populateAvlList({refresh: true});
    await this.populateAttachedList({refresh: true});
    this.genAttachedDirty();
    this.genAvlDirty();
  }

  async populateAvlList(args: any){
    this.avlItemListLoading = true;
    const avlData = await this.inputData["avlItemFunc"](args);
    this.avlList = [...this.avlList, ...avlData.data];
    this.avlLastPage = avlData.lastPage;
    this.avlItemListLoading = false;
  }

  async populateAttachedList(args: any){
    this.attachedItemListLoading = true;
    const attachedData = await this.inputData["attachedItemFunc"](args);
    this.attachedList = [...this.attachedList, ...attachedData.data];
    this.attachedLastPage = attachedData.lastPage;
    this.attachedItemListLoading = false;
  }

  genAvlDirty(){
    const filteredAvlList = this.avlList.filter(d=>this.attachedMod.filter(dx=>dx[this.inputData["filterBy"]]===d[this.inputData["filterBy"]]).length===0);
    const filteredAvlMod = this.avlMod.filter(d=>this.attachedMod.filter(dx=>dx[this.inputData["filterBy"]]===d[this.inputData["filterBy"]]).length===0);
    const finalList = [...filteredAvlList, ...filteredAvlMod];
    const searchKey = this.avlSearchObs.value;
    this.avlListDisplay = finalList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
  }

  genAttachedDirty(){
    const filteredAttachedList = this.attachedList.filter(d=>this.avlMod.filter(dx=>dx[this.inputData["filterBy"]]===d[this.inputData["filterBy"]]).length===0);
    const filteredAttachedMod = this.attachedMod.filter(d=>this.avlMod.filter(dx=>dx[this.inputData["filterBy"]]===d[this.inputData["filterBy"]]).length===0);
    const finalList = [...filteredAttachedList, ...filteredAttachedMod];
    const searchKey = this.attachedSearchObs.value;
    this.attachedListDisplay = finalList.filter(item => item[this.inputData['displayField']].search(new RegExp(searchKey, 'i')) !== -1);
  }

  // functionality handling methods
  pushItem(avlItem){
    if(this.attachedList.filter(d=>d[this.inputData["filterBy"]]===avlItem[this.inputData["filterBy"]]).length===1){
      this.avlMod = this.avlMod.filter(d=>d[this.inputData["filterBy"]]!==avlItem[this.inputData["filterBy"]]);
      this.genAttachedDirty();
      this.genAvlDirty();
    } else {
      this.attachedMod.push(avlItem);
      this.genAttachedDirty();
      this.genAvlDirty();
    }
    if (this.inputData["isDialog"]) {
      this.emitData();
    }
    this.checkAvlScroll()
  }

  removeItem(attachedItem){
    if(this.avlList.filter(d=>d[this.inputData["filterBy"]]===attachedItem[this.inputData["filterBy"]]).length===1){
      this.attachedMod = this.attachedMod.filter(d=>d[this.inputData["filterBy"]]!==attachedItem[this.inputData["filterBy"]]);
      this.genAttachedDirty();
      this.genAvlDirty();
    } else {
      this.avlMod.push(attachedItem);
      this.genAttachedDirty();
      this.genAvlDirty();
    }
    if (this.inputData["isDialog"]) {
      this.emitData();
    }
    this.checkAttachedScroll();
  }

  searchAvl(key: string){
    this.avlSearchObs.next(key);
  }

  searchAttached(key: string){
    this.attachedSearchObs.next(key);
  }

  async reset(){
    this.avlItemListLoading = true;
    this.attachedItemListLoading = true;
    this.avlList = [];
    this.attachedList = [];
    this.avlMod = [];
    this.avlListDisplay = [];
    this.attachedMod = [];
    this.attachedListDisplay = [];
    this.searchKey.attached = "";
    this.searchKey.avl = "";
    if(this.avlSearchObs.value!==""){
      this.avlSearchObs.next("");
    } else {
      await this.populateAvlList({refresh: true, searchKey: ""});
    }
    if(this.attachedSearchObs.value!==""){
      this.attachedSearchObs.next("");
    } else {
      await this.populateAttachedList({refresh: true, searchKey: ""});
    }
    this.genAvlDirty();
    this.genAttachedDirty();    
  }

  emitData(){
    if (this.inputData["activeControlled"]) {
      let outData = this.attachedListDisplay.map(d=>{
        let obj = {};
        obj[this.inputData["filterBy"]] = d[this.inputData["filterBy"]];
        obj["active"] = true;
        return obj;
      })
      this.attachedList.map(d=>{
        if(outData.filter(dx=>dx[this.inputData["filterBy"]]===d[this.inputData["filterBy"]]).length===0){
          let obj = {};
          obj[this.inputData["filterBy"]] = d[this.inputData["filterBy"]];
          obj["active"] = false;
          outData.push(obj);
        }
      })
      this.outputData.emit(outData);
    } else {
      this.outputData.emit(this.attachedListDisplay);
    }
  }

  async avlScrolled(){
    console.log("avl scrolled");
    this.avlPaginationLoading = true;
    await this.populateAvlList({searchKey: this.avlSearchObs.value});
    this.genAvlDirty();
    this.genAttachedDirty();
    this.avlPaginationLoading = false; 
  }

  async attachedScrolled(){
    console.log("attached scrolled");
    this.attachedPaginationLoading = true;
    await this.populateAttachedList({searchKey: this.attachedSearchObs.value});
    this.genAvlDirty();
    this.genAttachedDirty();
    this.attachedPaginationLoading = false;
  }

  checkAvlScroll(){
    console.log(this.avlListDisplay.length*51, this.avlItemsElement.nativeElement.offsetHeight)
    if(this.avlListDisplay.length*51 < this.avlItemsElement.nativeElement.offsetHeight){
      // item present in available list is not enough to show scrollbar
      // If not last page reached call for more data
      if (!this.avlLastPage) {
        this.avlScrolled();
      }
    }
  }

  checkAttachedScroll(){
    console.log(this.attachedListDisplay.length*51, this.attachedItemsElement.nativeElement.offsetHeight)
    if(this.attachedListDisplay.length*51 < this.attachedItemsElement.nativeElement.offsetHeight){
      // item present in available list is not enough to show scrollbar
      // If not last page reached call for more data
      if (!this.attachedLastPage) {
        this.attachedScrolled();
      }
    }
  }

  //utility methods
  objectExistInArray(obj: any, arr: any[], filterBy: string, seconderyFilterBy?: string): boolean {
    const filteredItems = arr.filter(d=>d[seconderyFilterBy?seconderyFilterBy:filterBy]===obj[filterBy]);
    return filteredItems.length > 0;
  }
}

//pipe for formatting secondery text
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
