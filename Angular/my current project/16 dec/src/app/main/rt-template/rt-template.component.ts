import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { globalUrls } from '../urls';
import { ConfirmDialogComponent } from '../utility/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'rt-template',
  templateUrl: './rt-template.component.html',
  styleUrls: ['./rt-template.component.scss']
})
export class RtTemplateComponent implements OnInit {
  pageNo: number = 1;
  pageSize: number = 100;
  searchKey: string = "";
  lastPage: boolean = false;
  rtId = ''
  templateList: any[] = [];
  loading = true;
  rtObj: any;

  constructor(private api: ApiService, public dialog: MatDialog, 
    private snackBar: MatSnackBar,private route: ActivatedRoute,
    private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.rtId = data['rtId'];
      this.readRT();
      this.pageNo = 1;
      this.templateList = [];
      this.getTemplateList();
    })
  }
  getTemplateList() {
    this.loading = true;
    this.api.postData(globalUrls.rtTemplateList, {
      pageNo: this.pageNo,
      pageSize: this.pageSize,
      searchText: this.searchKey,
      rtId: this.rtId
    }).subscribe((data: any) => {
      this.loading = false;
      this.templateList = this.templateList.concat(data['payload']);
      this.lastPage = data.payload.length < this.pageSize;
    })
  }
  readRT() {
    this.api.postData(globalUrls.rtRead, {
      "rtId": this.rtId
    }).subscribe(data => {
      if (data['code'] === 200) {
        this.rtObj = data['payload']
      }
    });
  }
  deleteService(obj) {
    this.dialog.open(ConfirmDialogComponent,
      {
        hasBackdrop:true,
        data:"Are you sure you want to delete?"
      }).afterClosed().subscribe(result => {
      if (result) {
        let payload = JSON.parse(JSON.stringify(obj))
        payload['active'] = false;
        this.api.postData(globalUrls.rtTemplateCreateUpdate, payload).subscribe(data => {
          this.snackBar.open("Successfully deleted!", "Close", {duration: 3000});
          this.pageNo = 1;
          this.templateList = [];
          this.getTemplateList();
        })
      }
    })
  }
  navigateBack(){
    this.location.back();
  }

  handleSearch(event: string){
    this.searchKey = event;
    this.pageNo = 1;
    this.templateList = [];
    this.getTemplateList();
  }

  onScroll(){
    if(!this.lastPage){
      this.pageNo += 1;
      this.getTemplateList();
    }
  }
}
