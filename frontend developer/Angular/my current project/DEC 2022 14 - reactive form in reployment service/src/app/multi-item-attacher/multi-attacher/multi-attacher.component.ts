import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MultiItemAttacherProps } from '../types';

@Component({
  selector: 'multi-attacher',
  templateUrl: './multi-attacher.component.html',
  styleUrls: ['./multi-attacher.component.scss']
})
export class MultiAttacherComponent implements OnInit {
  // api props
  attachmentsPageNo: number = 1;
  attachmentSearchKey: string = "";

  attachablePageNo: number = 1;
  attachableSearchKey: string = "";

  // dataset
  attachmentList: any[] = [];
  attachableList: any[] = [];

  selectedAttachment: string[] = [];
  selectedAttachables: string[] = [];

  // viewControl vars
  attachmentLoading: boolean = false;
  attachableLoading: boolean = false;

  // component input output
  @Input() multiAttacherProps: MultiItemAttacherProps;
  @Output() onAttach: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private snackbar: MatSnackBar
  ) { 
    this.multiAttacherProps = {
      attachmentTitle: "Attachments",
      attachmentFilterBy: "id",
      attachmentDisplay: "",
      attachmentDescription: "",
      attachmentPagination: false,
      attachmentProvider: null,

      attachableTitle: "",
      attachableFilterBy: "",
      attachableDisplay: "",
      attachableDescription: "",
      attachablePagination: false,
      attachableProvider: null,
      attachmentKey: ""
    }
  }

  ngOnInit(): void {
    this.fetchAttachments();
    this.fetchAttachables();
  }

  fetchAttachments(){
    if(!this.multiAttacherProps.attachmentProvider) return;
    this.multiAttacherProps.attachmentProvider(this.attachmentsPageNo, this.attachmentSearchKey).then((data: any[])=>{
      let newAttachments = data.map(d=>{
        d["visible"] = true;
        return d;
      })

      this.attachmentList = [...this.attachmentList, ...newAttachments];
      this.attachmentLoading = false;
    })
  }

  fetchAttachables(){
    if(!this.multiAttacherProps.attachableProvider) return;
    this.multiAttacherProps.attachableProvider(this.attachablePageNo, this.attachableSearchKey).then((data: any[])=>{
      let newData = data.map(d=>{
        d["visible"] = true;
        return d;
      });
      
      this.attachableList = [...this.attachableList, ...newData];
      this.attachableLoading = false;
    })
  }


  //utility functions
  attachableSearch(searchKey: string){
    const filteredList = this.attachableList.map(d=>{
      d["visible"] = d[this.multiAttacherProps.attachableDisplay].includes(searchKey);
      return d;
    })
    this.attachableList = filteredList;
  }

  attachmentSearch(searchKey: string){
    const filteredList = this.attachmentList.map(d=>{
      d["visible"] = d[this.multiAttacherProps.attachmentDisplay].includes(searchKey);
      return d;
    })
    this.attachmentList = filteredList;
  }

  toggleAttachment(attachment: any){
    if(this.selectedAttachment.includes(attachment[this.multiAttacherProps.attachmentFilterBy])){
      const filteredList = this.selectedAttachment.filter((d:string)=>d!==attachment[this.multiAttacherProps.attachmentFilterBy])
      this.selectedAttachment = filteredList;
    } else {
      this.selectedAttachment = [...this.selectedAttachment, ...[attachment[this.multiAttacherProps.attachmentFilterBy]]];
    }
  }

  toggleAllAttachment(toggle: boolean){
    if(!toggle){
      const attachments = this.attachmentList.map(d=>d[this.multiAttacherProps.attachmentFilterBy]);
      this.selectedAttachment = attachments;
    } else {
      this.selectedAttachment = [];
    }
  }

  toggleAttachable(attachable: any){
    if(this.selectedAttachables.includes(attachable[this.multiAttacherProps.attachableFilterBy])){
      const filteredList = this.selectedAttachables.filter((d:string)=>d!==attachable[this.multiAttacherProps.attachableFilterBy]);
      this.selectedAttachables = filteredList;
    } else {
      this.selectedAttachables = [...this.selectedAttachables, ...[attachable[this.multiAttacherProps.attachableFilterBy]]];
    }
  }

  toggleAllAttachable(toggle: boolean){
    if(!toggle){
      const attachments = this.attachableList.map(d=>d[this.multiAttacherProps.attachableFilterBy]);
      this.selectedAttachables = attachments;
    } else {
      this.selectedAttachables = [];
    }
  }

  removeAttachment(attachment: any, attachable: any){
    let filteredItems = this.attachableList.map(d=>{
      if(d[this.multiAttacherProps.attachableFilterBy]===attachable[this.multiAttacherProps.attachableFilterBy]){
        d[this.multiAttacherProps.attachmentKey] = d[this.multiAttacherProps.attachmentKey].filter((d: any)=>d[this.multiAttacherProps.attachmentFilterBy]!==attachment[this.multiAttacherProps.attachmentFilterBy])
      }
      return d;
    })
    this.attachableList = filteredItems;
    this.onAttach.emit(this.attachableList);
  }

  attach(){
    if(this.selectedAttachment.length===0){
      this.snackbar.open("Select attachments to attach!", "Close", {duration: 3000});
      return;
    } else if(this.selectedAttachables.length===0){
      this.snackbar.open("Select attachables to attach!", "Close", {duration: 3000});
      return;
    }

    let selectedAttachments = this.attachmentList.filter(d=>
      this.selectedAttachment.includes(d[this.multiAttacherProps.attachmentFilterBy]));

    const filteredList = this.attachableList.map(attachable=>{
      if(this.selectedAttachables.includes(attachable[this.multiAttacherProps.attachableFilterBy])){
        const filteredAttachList = selectedAttachments.filter(d=>{
          if(!attachable[this.multiAttacherProps.attachmentKey]){
            return d;
          } else {
            if(attachable[this.multiAttacherProps.attachmentKey].filter((a: any)=>a[this.multiAttacherProps.attachmentFilterBy]===d[this.multiAttacherProps.attachmentFilterBy]).length===0){
              return d
            }
          }
        })
        attachable[this.multiAttacherProps.attachmentKey] = [...attachable[this.multiAttacherProps.attachmentKey]||[], ...filteredAttachList];
      }
      // console.log(d);
      
      return attachable;
    });
    this.attachableList = filteredList;
    this.onAttach.emit(this.attachableList);
    this.selectedAttachables = [];
    this.selectedAttachment = [];
  }

  onAttachmentScroll(){
    console.log("attachment scrolled");
    this.attachmentsPageNo += 1;
    this.fetchAttachments();
  }

  onAttachableScroll(){
    console.log("attachable scrolled");
    this.attachablePageNo += 1;
    this.fetchAttachables();
  }

  addAdditionalAttachment(attachable: any, i: number){
    this.multiAttacherProps.customAttachmentProvider(attachable[this.multiAttacherProps.customAttachmentKey]).
      afterClosed().subscribe(data=>{
        if(data !== undefined){
          if(data===''){
            this.attachableList[i][this.multiAttacherProps.customAttachmentKey] = "";
          } else {
            this.attachableList[i][this.multiAttacherProps.customAttachmentKey] = data;
          }
          this.attachableList = [...this.attachableList];
        }
      })
  }
}
